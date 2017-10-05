import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sort-block',
    templateUrl: 'sort-block.component.html',
    styleUrls: ['sort-block.component.css']
})
export class SortBlockComponent {
    name = 'Sort Movies';
    
    @Output()
    sort: EventEmitter<string> = new EventEmitter();

    sortByLikes() {
        this.sort.emit('likes');
    }      
    sortByRaiting() {
        this.sort.emit('stars');
    }
}