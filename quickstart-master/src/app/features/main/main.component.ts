import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { MovieModule } from '../movie/index';
import { DataService } from '../main/main.service';

@Component({
    moduleId: module.id,    
    selector: "main",
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"],
    providers: [ MovieModule, DataService ] 
})

export class MainComponent {  
    itemArray: any[];
    item: any;  
    filter: string = '';
    pressDownButton: boolean = true;

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
    
    @Output()
    sort: EventEmitter<string> = new EventEmitter();

    sortHandler(value: any) {
        if (this.pressDownButton) {
            this.service.sortData(this.itemArray, value);
        } else {
            this.service.getData().subscribe(
                result => this.itemArray = result,
                error => console.log(error.statusText)                
        )};
        this.pressDownButton = !this.pressDownButton;        
    };
}