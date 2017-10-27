import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowComponent } from './ScrollDemo/window.component';
import { DivFieldComponent } from './ScrollDemo/div-field.component';

const routes: Routes = [
  { path: 'window', component: WindowComponent },
  { path: 'div-field', component: DivFieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [WindowComponent, DivFieldComponent];
