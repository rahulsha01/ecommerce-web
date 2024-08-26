import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-reactive-form',
  templateUrl: './common-reactive-form.component.html',
  styleUrl: './common-reactive-form.component.scss'
})
export class CommonReactiveFormComponent implements OnInit , OnChanges {  
  disabled: boolean = true;
  selectedValue: string = '';
  selectedCar: string | undefined;
  @Input() fields: any[];
  formName: FormGroup;
  @Input() formTitle: string = ""
  @Output() emitFormData: EventEmitter<any> = new EventEmitter<any>()

  cars = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];

  constructor(
    private fb : FormBuilder
  ) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.createForm();
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group: any = {};
    this.fields.forEach(field => {
        group[field.name] = [''];
    });
    this.formName = this.fb.group(group);
  }


  submit() {
    console.log(this.formName.value);
    this.emitFormData.emit({
      'formData': this.formName.value
    })
  }


}
