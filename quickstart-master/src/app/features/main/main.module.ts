import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SortBlockModule } from '../sort-block/index';
import { ListsMoviesModule } from '../lists-movies/index';
import { MovieModule } from '../movie/index';

@NgModule({
  imports: [ SortBlockModule, ListsMoviesModule, MovieModule ],
  declarations: [ MainComponent ],
  exports:    [ MainComponent ]
})
export class MainModule { } 