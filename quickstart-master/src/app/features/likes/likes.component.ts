import { Component, Input } from "@angular/core";
import { DataService } from '../main/main.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Movie } from "../main/movie";

@Component({
    moduleId: module.id,
    selector: 'likes',
    templateUrl: 'likes.component.html',
    styleUrls: ['likes.component.css'],
    providers: [ DataService ]
})

export class LikesComponent {
    @Input()
    item: Movie;
    itemArray: Movie[];
    errorMessage: string;      
 
    constructor(private http: Http, 
                private router: Router,
                private service: DataService) { };
    
    like(item: Movie, like: boolean) {
        like ? item.likes = item.likes + 1: 
               item.likes = item.likes - 1;
        this.service.updateData(item).subscribe(
            result => this.itemArray = result,
            error => this.errorMessage = error 
        );
    }
}
