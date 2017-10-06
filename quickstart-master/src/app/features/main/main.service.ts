import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from "@angular/http";
import { RequestOptions } from '@angular/http';
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

    sortData(itemArray: any, value: string) {
        itemArray.sort((a: any, b: any) => {
            if (a[value] < b[value]) {
                return -1;
            } else if (a[value] > b[value]) {
                return 1;
            } else {
                return 0;
            }
        });
        return itemArray;
    }     
}
