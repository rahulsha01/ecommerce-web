import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { FrameWorkService } from '../../shared/frame-work.service';
import { ENDPOINT } from '../../config/config';

export interface Order {
  id: number;
  description: string;
  amount: number;
  price: number;
  discount: number;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild('gridContainer', { read: ViewContainerRef, static: true }) gridContainerRef: ViewContainerRef | undefined;
  @ViewChild('gridTemplate', { static: true }) gridTemplateRef: TemplateRef<any> | any;
  @ViewChild('toolbarContainer', { read: ViewContainerRef, static: true }) toolbarContainerRef: ViewContainerRef | undefined;
  @ViewChild('toolbarTemplate', { static: true }) toolbarTemplateRef: TemplateRef<any> | any;
  @ViewChild('formContainer', { read: ViewContainerRef, static: true }) formContainerRef: ViewContainerRef | undefined;
  @ViewChild('formTemplate', { static: true }) formTemplateRef: TemplateRef<any> | any;
  data: { title: string; link: string; cssClass: string; }[] | any;
  pageTitle: string = "Category Management";
  CategoryForm: NgForm | undefined;
  authorsData = [];
  categoryColumns = [{ title: 'Category Name', key: 'category_name', type : 'string' },
  { title: 'Category Description', key: 'category_desc', type : 'string' }];
  totalRecords: number | undefined;
  perPage: number = 5;
  categoryList: any;
  categoryname: string = "";
  status = true;
  preferenceOrder: string = ""
  isUpdate: boolean | undefined = false;
  recordId: any;
  translationKeyword: string= "";
  fields: any = [ 
     { "type": "text", "label": "Name", "name": "category_name", "placeholder": "Enter Category Name" },
     { "type": "textarea", "label": "Description", "name": "category_desc", "placeholder": "Enter Category Description" }]



  constructor(private fb: FormBuilder, private httpService: FrameWorkService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setHeaderConfig();
    this.loadToolBarModule();
    this.loadGridModule();
    this.getListOfCategory();

  }

  loadGridModule() {
    this.gridContainerRef?.createEmbeddedView(this.gridTemplateRef);
  }

  loadFromModule() {
    this.formContainerRef?.createEmbeddedView(this.formTemplateRef);
  }

  loadToolBarModule() {
    this.toolbarContainerRef?.createEmbeddedView(this.toolbarTemplateRef);
  }

  setHeaderConfig() {
    this.data = []
  }

  createForm(event:any) {
    console.log(event);
    
    // this.categoryname = "";
    // this.recordId = "";
    // this.status = true;
    // this.preferenceOrder = "";
    // this.translationKeyword= ""
    // this.isUpdate = false;
    this.gridContainerRef?.clear();
    this.loadFromModule();
  }

  cancel() {
    this.formContainerRef?.clear();
    this.loadGridModule();
    this.toolbarContainerRef?.clear();
    this.loadToolBarModule();
  }

  addRow(formvalue : any) {
  
  }

  getListOfCategory() {
    this.httpService.getCategory().subscribe(res => {
      console.log(res);
      if(res.status == 'success') {
        this.categoryList = res.data;
        console.log(this.categoryList);
        this.totalRecords = res.data.length;
        
      }
      
    })
  }

  changePageSize(event: any) {
    
  }


  getEditRowValue(value: any) {
    // this.isUpdate = true;
    console.log(value);
    
    this.gridContainerRef?.clear();
    // this.categoryname = value.item.categoryname;
    // this.status = value.item.status == "true" ? true : false;
    // this.recordId = value.item.id;
    // this.translationKeyword = value.item.translationKeyword;
    // this.preferenceOrder = value.item.preferenceOrder;
    this.loadFromModule();
  }

  deleteCategoryRecord(val:any) {
    if(confirm("Are you sure to delete "+val.item.category_name)) {
      let url = `category/${val.item._id}/delete`
      this.httpService.deleteEntity(url).subscribe(res => {
        if(res) {
          this.httpService.openSnankBar('Deleted Successfully')
        }
      })
    this.getListOfCategory();
  }
  }

  checkCategoryIsUsed(val: any) {
  }

  refreshGrid() {
    this.loadGridModule();
  }

  saveCategoary(event: any) {
    console.log(event);
    this.httpService.addEntity(ENDPOINT.addCategory, event.formData).subscribe(res => {
      console.log(res)
      this.httpService.openErrorSnakBar('Suceessfully Added')
      this.formContainerRef?.clear();
      this.getListOfCategory();
      this.loadGridModule();
    })
  }

 
}

export interface Category {
  categoryName: string,
  preferenceOrder:number,
  isActive: boolean 
}
