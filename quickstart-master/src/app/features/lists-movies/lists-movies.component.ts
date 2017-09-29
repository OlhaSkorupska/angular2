import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "lists-movies",
    templateUrl: "app/features/lists-movies/lists-movies.component.html",
    styleUrls: ["app/features/lists-movies/lists-movies.component.css"]
})

export class ListsMoviesComponent implements OnInit {
    itemArray: any[];
    item: any;  

    toggoleShowHide: string ="hidden";  
    widthMainContent: string = "100%";
    currentItem: any;    

    name = 'ListsMoviesComponent';
    like(item: any) {
        item["likes"] = item["likes"] + 1;
        this.http.put("app/items", item).subscribe(
            result => {
                let json = result.json();
                if (json)
                    this.itemArray.push(json.data);
            },
            error => console.log(error.statusText)
            );
    }

    dislike(item: any) {
        item["likes"] = item["likes"] - 1;
        this.http.put("app/items", item).subscribe(
            result => {
                let json = result.json();
                if (json)
                    this.itemArray.push(json.data);
            },
            error => console.log(error.statusText)
            );
    }
    constructor(private http: Http) { }
    
    ngOnInit() {
        this.http.get("app/items").subscribe(
            result => this.itemArray = result.json().data,
            error => console.log(error.statusText)
        );
    }    

    render(details: Object) {
        this.currentItem = details;
        this.toggoleShowHide = "visible";
        this.widthMainContent = "50%";
    }    
}
