import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'search-button',
    templateUrl: 'search-button.component.html',
    styleUrls: ['search-button.component.css']
})
export class SearchButtonComponent {
    name = 'searchByname';

    @Output()
    search: EventEmitter<string> = new EventEmitter();

    onKeyUp(data: string){
        this.search.emit(data);
    } 
}