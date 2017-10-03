import { NgModule } from '@angular/core';
import { ListsMoviesComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { LikesModule } from '../likes/index';
import { StarsModule } from '../stars/index';

@NgModule({
    imports: [ BrowserModule, LikesModule, StarsModule ],
    declarations: [ ListsMoviesComponent ],
    exports:    [ ListsMoviesComponent ]
})
export class ListsMoviesModule { }