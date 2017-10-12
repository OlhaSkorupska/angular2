import { NgModule } from '@angular/core';

import { FooterModule, HeaderModule,
    SortBlockModule, 
    SearchButtonModule, 
    SortButtonModule,  
    LikesModule,
    RatingModule
    } from './index';
       
@NgModule({
  imports: [ 
    FooterModule,
    HeaderModule,
    SortBlockModule, 
    SearchButtonModule, 
    SortButtonModule,
    LikesModule,
    RatingModule
  ],
  exports: [ 
    FooterModule,
    HeaderModule,
    SortBlockModule, 
    SearchButtonModule, 
    SortButtonModule,
    LikesModule,
    RatingModule
  ]
})
export class SharedModule { }