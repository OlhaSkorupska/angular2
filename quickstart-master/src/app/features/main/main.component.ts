import { Component, OnInit, EventEmitter, Input, Output, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from '../main/main.service';
import { Movie } from "./movie";
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,    
    selector: "main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
    providers: [ DataService ]
})

export class MainComponent implements OnInit {  
    itemArray: Movie[];
    item: Movie;  
    pressDownButton: boolean = true;
    ratingClicked: number;
    destroyedArray: any = [];
    countDestroyed: number = 0;
    errorMessage: string;    
    private subscriptions: Array<Subscription> = [];

    constructor(private http: Http, 
                private router: Router,
                private service: DataService) { };                    
   
    ngOnInit(){
        const sub = this.service.getData()
        .subscribe(
            result => this.itemArray = result,
            error => this.errorMessage = error            
        );
        this.subscriptions.push(sub);    
    };

    render(details: any) {
        this.router.navigate(['/movie', details.id]);
    } 
    
    @Output() sort: EventEmitter<string> = new EventEmitter();

    @Output() search: EventEmitter<string> = new EventEmitter();

    searchHandler(value: string){  
        const sub = this.service.getData().subscribe(
            result => {
                this.itemArray = result.filter((item: any) => 
                (item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1));
            },
            error => this.errorMessage = error              
        );
        this.subscriptions.push(sub);         
    }

    sortHandler(value: any) {
        if (this.pressDownButton) {
            this.service.sortData(this.itemArray, value);
        } else {
            this.service.sortData(this.itemArray, 'id');            
        }
        this.pressDownButton = !this.pressDownButton;
    };

    ratingComponetClick(clickObj: any, item: Movie) {
        item.stars = clickObj.rating;    
        const sub = this.service.updateDataById(item, clickObj.idItem).subscribe(
            result => this.item = result,
            error => this.errorMessage = error
        );            
        this.subscriptions.push(sub); 
    }

    ngOnDestroy() {
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }
      
}