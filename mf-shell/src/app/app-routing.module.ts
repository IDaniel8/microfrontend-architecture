import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'path',
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     remoteName: 'mfreact',
  //     exposedModule: './web-components',
  //     elementName: 'mf-react'
  //   } as WebComponentWrapperOptions
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
