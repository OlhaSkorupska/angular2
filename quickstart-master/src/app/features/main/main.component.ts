import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "main",
    templateUrl: "app/features/main/main.component.html",
    styleUrls: ["app/features/main/main.component.css"]
})
export class MainComponent implements OnInit{
    itemArray: any[];
    item: any;    
    title: string = '';
    likes: number = 0;
    posterUrl: string = '';
    director: string = '';
    actors: string = '';
    genres: string = '';
    description: string = '';
    toggoleShowHide: string ="hidden";  
    widthMainContent: string = "100%";

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

    close() {
        this.toggoleShowHide = "hidden";
        this.widthMainContent = "100%";
    }

    render(details: Object) {
        this.title = details["title"];
        this.likes = details["likes"];
        this.posterUrl = details["posterUrl"];
        this.director = details["director"];
        this.actors = details["actors"];
        this.genres = details["genres"];
        this.description = details["description"];
        this.toggoleShowHide = "visible";
        this.widthMainContent = "50%";
    }    

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get("app/items").subscribe(
            result => this.itemArray = result.json().data,
            error => console.log(error.statusText)
        );
    }

}