import { Component } from "@angular/core";

@Component({
    selector: "header",
    templateUrl: "app/features/header/header.component.html",
    styleUrls: ["app/features/header/header.component.css"]
})
export class HeaderComponent {
    name = 'Movies'
}