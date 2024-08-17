import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() dismiss : EventEmitter<any> = new EventEmitter<any>() 

  closeSidebar() {
    this.dismiss.emit({
      
    })
  }

}
