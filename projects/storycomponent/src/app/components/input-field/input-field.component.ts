import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() Text:string = 'sfd fd f dfds'
  @Input() label:string ='Title';
  @Input() myInputField: any='dfd';
  @Input() type:string = 'text';
  constructor() { }

  ngOnInit(): void {
  }

}
