import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from "@angular/http";
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Movie } from "./movie";
import { Response } from '@angular/http';

@Injectable() 
export class DataService {
    itemArray: Movie;

    constructor(private http: Http) { }
    
    public getData(): Observable<Movie[]> {
        return this.http.get('app/items')
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    public getDataById(id: number): Observable<Movie> {
        return this.http.get(`app/items/${id}`)
            .map(response => response.json().data)
            .catch(this.handleError);                
    }     
    
    public updateData(item: Movie): Observable<Movie[]> {
        return this.http.post('app/items', item)
            .map(response => response.json())
            .catch(this.handleError);        
    }

    public updateDataById(item: Movie, id: number): Observable<Movie> {
        return this.http.post('app/items/$(item.id)', item)
            .map(response => response.json())
            .catch(this.handleError);
    }    

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = error.json().error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
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
