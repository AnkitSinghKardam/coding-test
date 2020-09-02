import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Data } from '../../../../models/data';

@Component({
  selector: 'app-successful-landing',
  templateUrl: './successful-landing.component.html',
  styleUrls: ['./successful-landing.component.scss']
})
export class SuccessfulLandingComponent implements OnInit {
  landings:Array<boolean> = [true, false];
  sLanding: string;
  constructor(private dataService:DataService) { }

  message:string;
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }
  sucLanding(event){
    console.log(event.target.innerHTML);
    this.sLanding = event.target.innerHTML;
    this.dataService.changeMessage("land_success", event.target.innerHTML);
  }
}
