import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() header : number = 1;
  @Output() headerIconClick : EventEmitter<any> = new EventEmitter();
  @Input() title : string = ""
  isSidebarOpen: boolean = false;

  backToMainPage(type : string) {
    this.headerIconClick.emit({
      type : type
    })
  }

  openSidebar() {
    this.isSidebarOpen = true;
  }

  onDismiss() {
    this.isSidebarOpen = false;
  }

}
