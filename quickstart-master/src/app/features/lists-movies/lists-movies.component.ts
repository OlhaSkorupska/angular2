import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MovieModule } from '../movie/index';
import { DataService } from '../lists-movies/lists-movies.service';

@Component({
    moduleId: module.id,
    selector: 'lists-movies',
    templateUrl: 'lists-movies.component.html',
    styleUrls: ['lists-movies.component.css'],
    providers: [ MovieModule, DataService ]
})

export class ListsMoviesComponent {
    itemArray: any[];
    item: any;  
 
    constructor(private http: Http, 
                private router: Router,
                private service: DataService) { 
            this.service.getData().subscribe(
                result => this.itemArray = result,
                error => console.log(error.statusText)                
            )};

    render(details: any) {
        this.router.navigate(['/movie', details.id]);
    }    
}
