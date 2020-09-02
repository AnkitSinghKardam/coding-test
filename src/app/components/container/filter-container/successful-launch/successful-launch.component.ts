import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Data } from '../../../../models/data';
@Component({
  selector: 'app-successful-launch',
  templateUrl: './successful-launch.component.html',
  styleUrls: ['./successful-launch.component.scss']
})
export class SuccessfulLaunchComponent implements OnInit {
  sLaunch: string;
  launchs:Array<boolean> = [true, false];
  getLaunchSuccessData:Data[] = [];
  constructor(private dataService:DataService) { }
  message:string;
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  launchSuccess(event){
      console.log(event.target.innerHTML);
      this.sLaunch = event.target.innerHTML;
      this.dataService.changeMessage("launch_success", event.target.innerHTML);
  }
  

}
