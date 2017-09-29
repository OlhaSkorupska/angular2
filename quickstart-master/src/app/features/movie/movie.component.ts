import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    selector: "movie",
    templateUrl: "app/features/movie/movie.component.html",
    styleUrls: ["app/features/movie/movie.component.css"]
})

export class MovieComponent {
toggoleShowHide: string ='';  
widthMainContent: string = '';
    close() {
        this.toggoleShowHide = "hidden";
        this.widthMainContent = "100%";
    }  
}
