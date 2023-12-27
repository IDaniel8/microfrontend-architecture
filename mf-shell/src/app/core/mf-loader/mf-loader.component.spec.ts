import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfLoaderComponent } from './mf-loader.component';

describe('MfLoaderComponent', () => {
  let component: MfLoaderComponent;
  let fixture: ComponentFixture<MfLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfLoaderComponent]
    });
    fixture = TestBed.createComponent(MfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
