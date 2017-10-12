import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rating } from "../../core/index";

@Component({
    moduleId: module.id,
    selector: 'app-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.css']
})

export class RatingComponent {
    @Input() rating: number;
    @Input() itemId: number;
    @Output() ratingClick: EventEmitter<Rating> = new EventEmitter();

    inputsName:string;
    ngOnInit() {
      this.inputsName = this.itemId + '_rating';
    }
    onClick(rating: number): void {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    }
}