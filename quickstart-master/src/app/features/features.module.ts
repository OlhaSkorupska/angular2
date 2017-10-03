import { NgModule } from '@angular/core';

import { FooterModule, 
            HeaderModule, 
            MainModule, 
            SortBlockModule, 
            SearchButtonModule, 
            SortButtonModule, 
            ListsMoviesModule, 
            MovieModule,
            LikesModule,
            StarsModule } from './index';

@NgModule({
  imports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      ListsMoviesModule,
      MovieModule,
      LikesModule,
      StarsModule
  ],
  exports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      ListsMoviesModule,
      MovieModule,
      LikesModule,
      StarsModule
  ]
})
export class FeaturesModule { }
