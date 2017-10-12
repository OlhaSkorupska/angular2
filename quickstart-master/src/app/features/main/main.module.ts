import { NgModule } from '@angular/core';
import { MainComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { SortBlockModule,  SearchButtonModule, SortButtonModule, LikesModule, RatingModule } from '../../shared/index';
import { MovieModule } from '../movie/index';

@NgModule({
  imports: [ SortBlockModule, SearchButtonModule, SortButtonModule, MovieModule, BrowserModule, LikesModule, RatingModule ],
  declarations: [ MainComponent ],
  exports:    [ MainComponent ]
})
export class MainModule { } 