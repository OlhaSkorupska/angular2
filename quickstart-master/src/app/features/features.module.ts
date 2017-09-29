import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { SortBlockModule } from './sort-block/sort-block.module';
import { SearchButtonModule } from './search-button/search-button.module';
import { SortButtonModule } from './sort-button/sort-button.module';
import { ListsMoviesModule } from './lists-movies/lists-movies.module';
import { MovieModule } from './movie/movie.module';

@NgModule({
  imports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      ListsMoviesModule,
      MovieModule
  ],
  exports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      ListsMoviesModule,
      MovieModule
  ]
})
export class FeaturesModule { }
