import { NgModule } from '@angular/core';

import { FooterModule, 
            HeaderModule, 
            MainModule, 
            SortBlockModule, 
            SearchButtonModule, 
            SortButtonModule, 
            MovieModule,
            LikesModule,
            RatingModule } from './index';
       
@NgModule({
  imports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      MovieModule,
      LikesModule,
      RatingModule
  ],
  exports: [ 
      FooterModule, 
      HeaderModule, 
      MainModule,
      SortBlockModule,
      SearchButtonModule,
      SortButtonModule,
      MovieModule,
      LikesModule,
      RatingModule
  ]
})
export class FeaturesModule { }
