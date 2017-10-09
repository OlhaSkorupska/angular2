import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../main/main.service';
import { RatingModule } from '../rating/index';
import { Movies } from "../main/movies";

@Component({
    moduleId: module.id,
    selector: "movie",
    templateUrl: "movie.component.html",
    styleUrls: ["movie.component.css"],
    providers: [ DataService, RatingModule ]
})


export class MovieComponent {
    currentItem: Movies;
    private sub: any;
    private id: any;
    itemArray: any[];    

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
    
    ratingComponetClick(clickObj: any, item: any): void {
        item.stars = clickObj.rating; 
        this.service.updateDataById(item, clickObj.itemId).subscribe(
            result => this.currentItem = result,
            error => console.log(error.statusText)
        );            
    }  
}
