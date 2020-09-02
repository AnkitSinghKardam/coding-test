import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Data } from '../../../../models/data';
@Component({
  selector: 'app-launch-year',
  templateUrl: './launch-year.component.html',
  styleUrls: ['./launch-year.component.scss']
})
export class LaunchYearComponent implements OnInit {
  sYear: string;

  years:Array<number> = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  
  constructor(private dataService: DataService) { }
  message:string
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  selectedYear(event){
    this.sYear = event.target.innerHTML;
    this.dataService.changeMessage("launch_year", event.target.innerHTML);
  }

  
}
