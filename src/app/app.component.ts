import { Component, OnInit } from '@angular/core';
import { FetchtableService } from './fetchtable.service';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalData: any;
  tableDetails: any;
  constructor(private service: FetchtableService) {
    setInterval(() => {
      this.rowData = cloneDeep(this.rowData);
      console.log(this.rowData, "Every 10 seconds ApiHit");
    }, 10000)
  }
  columnDefs = [
    { headerName: 'TITLE', field: 'title', width: 400 },
    { headerName: 'URL', field: 'url', width: 400 },
    { headerName: 'CREATED AT', field: 'created_at', width: 200 },
    { headerName: 'AUTHOR', field: 'author', width: 200 }

  ];
  rowData: any;

  ngOnInit(): void {
    this.tableData();
  }

  tableData() {
    this.service.getTabledata().subscribe(
      resp => {
        console.log(resp, "tabledata");
        this.tableDetails = resp;
        this.rowData = this.tableDetails.hits;
        console.log(this.rowData, "data");
      }
    )
  }
  modalDisplay(event) {
    this.modalData = event.data;
  }
}
