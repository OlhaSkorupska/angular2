import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FeaturesModule } from './features/features.module';

import { AppComponent }  from './app.component';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ItemData } from "./sample01_inMemServer/inMemoryServer";
import { InMemoryServerModule } from "./sample01_inMemServer/sample.module";

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    InMemoryWebApiModule.forRoot(ItemData), InMemoryServerModule, FeaturesModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
