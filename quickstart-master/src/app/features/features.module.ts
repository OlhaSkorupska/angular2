import { NgModule } from '@angular/core';

import { MainModule, MovieModule  } from './index';
//import { SharedModule } from '../shared/shared.module';
       
@NgModule({
  imports: [ 
      MainModule,
      MovieModule
  ],
  exports: [ 
      MainModule,
      MovieModule
  ]
})
export class FeaturesModule { }
