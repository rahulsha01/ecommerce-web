import { ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FrameWorkService } from '../../shared/frame-work.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss'
})
export class ProductTableComponent {

  
  @ViewChild('gridContainer', { read: ViewContainerRef, static: true }) gridContainerRef: ViewContainerRef | undefined;
  @ViewChild('gridTemplate', { static: true }) gridTemplateRef: TemplateRef<any> | any;
  @ViewChild('toolbarContainer', { read: ViewContainerRef, static: true }) toolbarContainerRef: ViewContainerRef | undefined;
  @ViewChild('toolbarTemplate', { static: true }) toolbarTemplateRef: TemplateRef<any> | any;
  @ViewChild('formContainer', { read: ViewContainerRef, static: true }) formContainerRef: ViewContainerRef | undefined;
  @ViewChild('formTemplate', { static: true }) formTemplateRef: TemplateRef<any> | any;
  data: { title: string; link: string; cssClass: string; }[] | any;
  pageTitle: string = "Product Management";
  userForm: NgForm | undefined;
  authorsData = [];
  productColumns = [
    { title: 'Product Name', key: 'productName', type : 'string' },
    { title: 'Weight', key: 'product_weight', type : 'string' },

    { title: 'Description', key: 'productDescription', type : 'string' },

    { title: 'Price', key: 'productPrice', type : 'string' },

    { title: 'Stock Quantity', key: 'productStockQuantity', type : 'string' },

    { title: 'Images', key: 'productImagesUrl', type : 'img' }];
  totalRecords: number | undefined;
  perPage: number = 5;
  productList: any;
  username: string = "";
  status = true;
  preferenceOrder: string = ""
  isUpdate: boolean | undefined = false;
  recordId: any;
  translationKeyword: string= "";



  constructor(private fb: FormBuilder, private httpService: FrameWorkService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setHeaderConfig();
    this.loadToolBarModule();
    this.loadGridModule();
    this.getListOfProduct();

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
    
    this.username = "";
    this.recordId = "";
    this.status = true;
    this.preferenceOrder = "";
    this.translationKeyword= ""
    this.isUpdate = false;
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

  getListOfProduct() {
    this.httpService.getProduct().subscribe(res => {
      console.log(res);
      if(res.status) {
        this.productList = res.data;
        console.log(this.productList);
        this.totalRecords = res.data.length;
      }
      
    })
  }

  changePageSize(event: any) {
    
  }


  getEditRowValue(value: any) {
    this.isUpdate = true;
    this.gridContainerRef?.clear();
    this.username = value.item.username;
    this.status = value.item.status == "true" ? true : false;
    this.recordId = value.item.id;
    this.translationKeyword = value.item.translationKeyword;
    this.preferenceOrder = value.item.preferenceOrder;
    this.loadFromModule();
  }

  deleteuserRecord(val:any) {
    if(confirm("Are you sure to delete "+val.item.username)) {
      console.log("Implement delete functionality here");
    this.getListOfProduct();
  }
  }

  checkuserIsUsed(val: any) {
  }

  refreshGrid() {
    this.loadGridModule();
  }
}
