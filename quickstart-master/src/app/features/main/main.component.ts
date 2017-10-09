import { Component, OnInit, EventEmitter, Input, Output, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { DataService } from '../main/main.service';
import { Movies } from "./movies";

@Component({
    moduleId: module.id,    
    selector: "main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
    providers: [ DataService ] 
})

export class MainComponent implements OnInit {  
    itemArray: Movies[];
    item: Movies;  
    pressDownButton: boolean = true;
    ratingClicked: number;
    destroyedArray: any = [];
    countDestroyed: number = 0;

    constructor(private http: Http, 
                private router: Router,
                private service: DataService) { };                    
   
    ngOnInit(){
        this.destroyedArray[this.countDestroyed] = this.service.getData().subscribe(
            result => this.itemArray = result,
            error => console.log(error.statusText));
        this.countDestroyed++;
    };

    render(details: any) {
        this.router.navigate(['/movie', details.id]);
    } 
    
    @Output()
    sort: EventEmitter<string> = new EventEmitter();

    @Output()
    search: EventEmitter<string> = new EventEmitter();

    searchHandler(value: string){  
        this.destroyedArray[this.countDestroyed] = this.service.getData().subscribe(
            result => {
                this.itemArray = result.filter((item: any) => 
                (item['title'].toLowerCase().indexOf(value.toLowerCase()) !== -1));
            },
            error => console.log(error.statusText)                
        );
        this.countDestroyed++;        
    }

    sortHandler(value: any) {
        if (this.pressDownButton) {
            this.service.sortData(this.itemArray, value);
        } else {
            this.service.sortData(this.itemArray, 'id');            
        }
        this.pressDownButton = !this.pressDownButton;
    };

    ratingComponetClick(clickObj: any, item: Movies): void {
        item.stars = clickObj.rating;    
        this.destroyedArray[this.countDestroyed] = this.service.updateData(item).subscribe(
            result => this.itemArray = result,
            error => console.log(error.statusText)
        );            
        this.countDestroyed++;
    }

    ngOnDestroy() {
        for (let i=0; i < this.destroyedArray.length; i++) {
            this.destroyedArray[i].unsubscribe();
        }
    }
      
}