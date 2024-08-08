import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponent implements OnInit {
  list = [{'id': 1 , 'title': 'Test 1'},{'id': 1 , 'title': 'Test 1'},{'id': 1 , 'title': 'Test 1'},
  {'id': 1 , 'title': 'Test 1'},{'id': 1 , 'title': 'Test 1'},{'id': 1 , 'title': 'Test 1'}]
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    alert('Test');
  }

}
