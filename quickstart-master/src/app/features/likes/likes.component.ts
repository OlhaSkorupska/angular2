import { Component, Input } from "@angular/core";
import { DataService } from '../lists-movies/lists-movies.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'likes',
    templateUrl: 'likes.component.html',
    styleUrls: ['likes.component.css'],
    providers: [ DataService ]
})

export class LikesComponent {
    @Input()
    item: any;
    itemArray: any[];
 
    constructor(private http: Http, 
                private router: Router,
                private service: DataService) { };
    
    like(item: any, like: boolean) {
        like ? item["likes"] = item["likes"] + 1 : 
               item["likes"] = item["likes"] - 1;
        this.service.updateData(item).subscribe(
            result => this.itemArray = result,
            error => console.log(error.statusText)
        );
    }
}
