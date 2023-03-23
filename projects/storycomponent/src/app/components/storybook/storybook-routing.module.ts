import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';

const routes: Routes = [
  {
    path: '',
    component: InputFieldComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
