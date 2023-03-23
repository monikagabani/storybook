import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputFieldComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StorybookModule { }
