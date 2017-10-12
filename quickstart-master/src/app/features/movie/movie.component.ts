import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { RatingModule} from '../../shared/index';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../core/service/data.service';
import { Movie, Rating } from "../../core/index";

@Component({
    moduleId: module.id,
    selector: "movie",
    templateUrl: "movie.component.html",
    styleUrls: ["movie.component.css"],
    providers: [ DataService ]
})


export class MovieComponent {
    currentItem: Movie;
    private subscriptions: Array<Subscription> = [];    
    item: Movie;  
    errorMessage: string = '';

    constructor(private http: Http, 
                private route: ActivatedRoute, 
                private router: Router,
                private service: DataService) { 
        const sub = this.route.params.subscribe(params => {
            const id = +params['id'];
            this.service.getDataById(id).subscribe(
                result => this.currentItem = result,
                error => console.log(error.statusText)                
            );
        });
        this.subscriptions.push(sub);        
    } 

    close() {
        this.router.navigate(['/main']);
    }
    
    ratingComponetClick(clickObj: Rating, item: Movie) {
        item.stars = clickObj.rating;    
        const sub = this.service.updateDataById(item, clickObj.itemId).subscribe(
            result => this.item = result,
            error => this.errorMessage = error
        );            
        this.subscriptions.push(sub); 
    }
}
