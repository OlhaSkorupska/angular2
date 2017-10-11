import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../main/main.service';
import { RatingModule } from '../rating/index';
import { Movie } from "../main/movie";

@Component({
    moduleId: module.id,
    selector: "movie",
    templateUrl: "movie.component.html",
    styleUrls: ["movie.component.css"],
    providers: [ DataService, RatingModule ]
})


export class MovieComponent {
    currentItem: Movie;
    private sub: any;
    private id: any;
    item: Movie;  
    errorMessage: string = '';
    constructor(private http: Http, 
                private route: ActivatedRoute, 
                private router: Router,
                private service: DataService) { 
        this.sub = this.route.params.subscribe(params => {
            const id = +params['id'];
            this.service.getDataById(id).subscribe(
                result => this.currentItem = result,
                error => console.log(error.statusText)                
            );
        });
    } 

    close() {
        this.router.navigate(['/main']);
    }
    
    ratingComponetClick(clickObj: any, item: Movie) {
        item.stars = clickObj.rating;    
        this.service.updateDataById(item, clickObj.idItem).subscribe(
            result => this.item = result,
            error => this.errorMessage = error
        );         
    } 
}
