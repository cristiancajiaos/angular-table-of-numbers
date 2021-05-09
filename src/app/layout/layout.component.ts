import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  subCells = ['O1', 'T2', 'T3', 'F4', 'F5', 'S6', 'S7', 'E8'];

  myNumbers = ['O1', 'T3', 'S6'];

  ngOnInit(): void {
  }

}
