import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  apiRoot : string ="http://httpbin.org"

  constructor() { }

  ngOnInit(): void {
  }

  doGet(){
    console.log('Get Method Called');
  }
  doPost(){
    console.log('Post Method Called')
  }
  doPut(){
    console.log('Put Method Called')
  }
  doDelete(){
    console.log('Delete Method Called')
  }

}
