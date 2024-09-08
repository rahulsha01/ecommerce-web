import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-common-reactive-form',
  templateUrl: './common-reactive-form.component.html',
  styleUrl: './common-reactive-form.component.scss',
})
export class CommonReactiveFormComponent implements OnInit, OnChanges {
  disabled: boolean = true;
  selectedValue: string = '';
  selectedCar: string | undefined;
  @Input() fields: any[];
  formName: FormGroup;
  @Input() formTitle: string = '';
  @Output() emitFormData: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group: any = {};
    this.fields.forEach((field) => {
      console.log(field.value);
      group[field.key] = [field.value != '' ? field.value : ''];
    });

    this.formName = this.fb.group(group);
  }

  onFileChanged(event: any , key: string)  {
      console.log( event.target.files);
      this.formName.get(key)?.patchValue(event.target.files)
  }

  submit() {
    console.log(this.formName.value);
    this.emitFormData.emit({
      formData: this.formName.value,
    });
  }
}
