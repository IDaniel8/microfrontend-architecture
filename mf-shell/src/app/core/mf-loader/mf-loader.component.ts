import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { catchError, finalize, first, from, tap } from 'rxjs';

@Component({
  selector: 'mf-loader',
  templateUrl: './mf-loader.component.html',
  styleUrls: ['./mf-loader.component.scss'],
})
export class MfLoaderComponent {
  @ViewChild('vc', { read: ElementRef, static: true }) vc!: ElementRef;
  @ViewChild('vcLoader', { read: ElementRef, static: true })
  vcLoader!: ElementRef;

  @Input() registryConfig!: {
    importName: string;
    loaderFn: () => Promise<any>;
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterContentInit() {
    const registryConfig$ = from(this.registryConfig.loaderFn());
    let element: HTMLElement;

    registryConfig$
      .pipe(
        first(),
        tap(() => {
          console.log(`element ${this.registryConfig.importName} loaded!`);
          element = this.document.createElement(
            `${this.registryConfig.importName}-element`
          );
        }),
        catchError((err) => {
          console.error(
            `error loading ${this.registryConfig.importName}:`,
            err
          );
          element = this.document.createElement('div');
          element.setAttribute('style', 'color: red');
          element.innerText = 'Microapp not loaded...';
          return err;
        }),
        finalize(() => {
          this.vc.nativeElement.removeChild(this.vcLoader.nativeElement);
          this.vc.nativeElement.appendChild(element);
        })
      )
      .subscribe();
  }
}
