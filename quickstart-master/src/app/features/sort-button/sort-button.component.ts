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

    @Output()
    sort: EventEmitter<string> = new EventEmitter();

    start() {
        this.sort.emit(this.name);
    }   
}