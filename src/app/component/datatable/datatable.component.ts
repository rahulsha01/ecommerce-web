import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, ContentChild, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit , OnChanges {
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.rowData);
    
  }
  @Input() rowData: any;
  isHiden: boolean = true;
  @Input()
  columns: { title: string; key: string , type?: string }[] = [];

  @Input()
  values: any[] = [];
  @ContentChild("header", { static: false })
  headerTemplate: TemplateRef<any> | undefined;
  @ContentChild("body", { static: false })
  bodyTemplate: TemplateRef<any> | undefined;
  @Input() totalRecord: any = 0;
  @Input() perPage: number = 0;
  to:number = 10;
  from : number = 1;
  lastPage: number = 36;
  currentPage:number = 1;
  totalPage:number = 0;
  totalPageArr: any[] = [];
  pageEvent: PageEvent | undefined;
  @Output() changePageSizeEvent: EventEmitter<any>  = new EventEmitter<any>();

  @Output() editFormEventEmitter: EventEmitter<any>  = new EventEmitter<any>();

  @Output() deleteFormEventEmitter: EventEmitter<any>  = new EventEmitter<any>();

  ngOnInit(): void { 
  }



  getPageEvent(pageEvent: PageEvent) {
    console.log(pageEvent);
    this.changePageSizeEvent.emit({
      event: pageEvent      
    })
    this.perPage = pageEvent.pageSize;
  }

  numberReturn(length:number){
    return Array.from({length: length}, (v, k) => k+1); 
  }

  editForm(item:any) {
    this.editFormEventEmitter.emit({
      item : item
    })
  }

  getPremiumData() {

  }

  deleteForm(item:any) {
      this.deleteFormEventEmitter.emit({
        item: item
      })
  }

}
