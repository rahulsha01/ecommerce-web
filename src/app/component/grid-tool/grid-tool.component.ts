import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-tool',
  templateUrl: './grid-tool.component.html',
  styleUrls: ['./grid-tool.component.scss']
})
export class GridToolComponent implements OnInit {
  isFormVisible: boolean = false;
  constructor() { }
  @Output() handleAddRowEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output() handleRefreshEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  addRow(events : any) {
    this.isFormVisible = !this.isFormVisible;
    this.handleAddRowEvent.emit({
      events : events,
      callBackParams: ""});
  }

  refreshEvent(event: any) {
    this.handleRefreshEvent.emit({
      event: event
    })
  }

}
