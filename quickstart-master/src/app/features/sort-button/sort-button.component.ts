import { Component } from "@angular/core";

@Component({
    selector: "sort-button",
    templateUrl: "app/features/sort-button/sort-button.component.html",
    styleUrls: ["app/features/sort-button/sort-button.component.css"],
    inputs: ["name"]
})
export class SortButtonComponent {
    name: string = 'sort';
}