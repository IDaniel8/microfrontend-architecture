import { NgModule } from '@angular/core';
import { MfLoaderComponent } from './mf-loader/mf-loader.component';

const components = [MfLoaderComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
})
export class CoreModule {}
