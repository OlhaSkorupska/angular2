import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'stars',
    templateUrl: 'stars.component.html',
    styleUrls: ['stars.component.css']
})

export class StarsComponent {
    @Input()
    stars: number = 2;
}
