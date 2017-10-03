import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable() 
export class DataService {
    itemArray: any[];

    constructor(private http: Http) { }
    
    getData(): Observable<any> {
        return this.http.get('app/items')
          .map(response => response.json().data);
    }
    
    getDataById(id: number): Observable<any> {
        return this.http.get(`app/items/${id}`)
        .map(response => response.json().data);        
    }     
    
    updateData(item: any): Observable<any> {
        return this.http.put("app/items", item)
        .map(response => response.json().data);         
    }
}
