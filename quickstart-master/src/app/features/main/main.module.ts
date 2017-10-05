import { NgModule } from '@angular/core';
import { MainComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { LikesModule } from '../likes/index';
import { StarsModule } from '../stars/index';
import { SortButtonModule } from '../sort-button/index';
import { SortBlockModule } from '../sort-block/index';
import { MovieModule } from '../movie/index';

@NgModule({
  imports: [ SortBlockModule, MovieModule, SortButtonModule, StarsModule, LikesModule, BrowserModule ],
  declarations: [ MainComponent ],
  exports:    [ MainComponent ]
})
export class MainModule { } 