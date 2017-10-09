import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from "@angular/http";
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Movies } from "./movies";

@Injectable() 
export class DataService {
    itemArray: Movies;

    constructor(private http: Http) { }
    
    getData(): Observable<Movies[]> {
        return this.http.get('app/items')
          .map(response => response.json().data);
    }
    
    getDataById(id: number): Observable<Movies> {
        return this.http.get(`app/items/${id}`)
        .map(response => response.json().data);        
    }     
    
    updateData(item: Movies): Observable<Movies[]> {
        return this.http.put("app/items", item)
        .map(response => response.json().data);         
    }

    updateDataById(item: Movies, id: number): Observable<Movies> {
        return this.http.put(`app/items/${id}`, item)
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
