import { NgModule } from '@angular/core';
import { ListsMoviesComponent } from './lists-movies.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ListsMoviesComponent ],
    exports:    [ ListsMoviesComponent ]
})
export class ListsMoviesModule { }