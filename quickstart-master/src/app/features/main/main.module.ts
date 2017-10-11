import { NgModule } from '@angular/core';
import { MainComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { LikesModule } from '../likes/index';
import { SortButtonModule } from '../sort-button/index';
import { SortBlockModule } from '../sort-block/index';
import { MovieModule } from '../movie/index';
import { RatingModule } from '../rating/index';
import { Movie } from './index';

@NgModule({
  imports: [ SortBlockModule, MovieModule, 
    SortButtonModule, LikesModule, BrowserModule,
    RatingModule ],
  declarations: [ MainComponent ],
  exports:    [ MainComponent ]
})
export class MainModule { } 