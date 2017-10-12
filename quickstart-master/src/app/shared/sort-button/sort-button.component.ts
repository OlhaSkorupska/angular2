import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sort-button',
    templateUrl: 'sort-button.component.html',
    styleUrls: ['sort-button.component.css']
})
export class SortButtonComponent {
    @Input()
    name: string = 'sort';  
}