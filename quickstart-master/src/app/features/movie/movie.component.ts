import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../lists-movies/lists-movies.service';

@Component({
    moduleId: module.id,
    selector: "movie",
    templateUrl: "movie.component.html",
    styleUrls: ["movie.component.css"],
    providers: [ DataService ]
})


export class MovieComponent {
    currentItem: any;
    private sub: any;
    private id: any;

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
}
