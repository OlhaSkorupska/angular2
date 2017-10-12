import { NgModule } from '@angular/core';
import { SortBlockComponent } from './sort-block.component';
import { SortButtonModule } from '../sort-button/index';
import { SearchButtonModule } from '../search-button/index';

@NgModule({
    imports: [ SortButtonModule, SearchButtonModule ],
    declarations: [ SortBlockComponent ],
    exports:    [ SortBlockComponent ]
})
export class SortBlockModule { } 