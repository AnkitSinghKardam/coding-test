import { Injectable } from '@angular/core';
import { Data } from '../../app/models/data';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:Data[] = [];
  constructor(private httpClient:HttpClient) { 
    console.log(this.messageSource.value);
  }

  /*ankit*/
    baseUrl:string = `https://api.spacexdata.com/v3/launches?limit=100`;
    messageSource = new BehaviorSubject<any>({});
    currentMessage = this.messageSource.asObservable();

    changeMessage(attributeName: string, attributeValue: string) {
      var value = this.messageSource.value;
      value[attributeName] = attributeValue;
      this.messageSource.next(value);
    }
    
  /*ankit*/



  getAllData(): Observable<Data[]>{
    const x = new BehaviorSubject([]);
    this.messageSource.subscribe((v: any) => {
      var filter = '&';
      Object.entries(v).forEach(
        ([key, value]) => {
          if (value) {
            filter += key + '=' + value + '&';
          }
        }
      );

      this.httpClient.get<Data[]>(this.baseUrl + filter).subscribe((data: Data[]) => {
        x.next(data);
      });
    });


    return x.asObservable();
  }

  
}
