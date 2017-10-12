import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Http } from "@angular/http";
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Movie } from "./movie.model";
import { Response } from '@angular/http';

@Injectable() 
export class DataService {
    itemArray: Movie;
    private Url: string = 'app/items';    

    constructor(private http: Http) { }
    
    public getData(): Observable<Movie[]> {
        return this.http.get(this.Url)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    public getDataById(id: number): Observable<Movie> {
        return this.http.get(`${this.Url}/${id}`)
            .map(response => response.json().data)
            .catch(this.handleError);                
    }     
    
    public updateData(item: Movie): Observable<Movie[]> {
        return this.http.post(this.Url, item)
            .map(response => response.json())
            .catch(this.handleError);        
    }

    public updateDataById(item: Movie, id: number): Observable<Movie> {
        return this.http.post(`${this.Url}/${item.id}`, item)
            .map(response => response.json())
            .catch(this.handleError);
    }    

    private handleError (error: Response) {
        return Observable.throw(error);
      }

    sortData(itemArray: Movie[], value: string) {
        itemArray.sort((a: Movie, b: Movie) => {
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
