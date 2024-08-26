import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonReactiveFormComponent } from './component/common-reactive-form/common-reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CommonReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatRippleModule,
    MatCheckboxModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule
    
  ],
  exports: [
    CommonReactiveFormComponent
  ]
})
export class SharedModule { }
