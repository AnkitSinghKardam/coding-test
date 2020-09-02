import { Component, OnInit, Input, DoCheck, AfterContentChecked, OnChanges, AfterViewChecked, AfterContentInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Data } from '../../../../models/data';
@Component({
  selector: 'app-result-items',
  templateUrl: './result-items.component.html',
  styleUrls: ['./result-items.component.scss']
})
export class ResultItemsComponent implements OnInit{
  getData:Data[] = [];
  constructor(private dataService:DataService) { }
  message:string;
  
  ngOnInit(): void {
    this.reciveAllData();
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  reciveAllData(){
    this.dataService.getAllData().subscribe(data => {
      this.getData = data;
      console.log(this.getData);
    });
  }

}
