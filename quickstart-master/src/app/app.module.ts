import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FeaturesModule } from './features/features.module';
import { MovieComponent } from './features/index';
import { MainComponent } from './features/main/main.component';
import { RouterModule } from "@angular/router";
import { AppComponent }  from './app.component';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ItemData } from "./inMemoryServer";
import { InMemoryServerModule } from "./sample.module";

@NgModule({
  imports: [ BrowserModule, HttpModule,
    InMemoryWebApiModule.forRoot(ItemData), InMemoryServerModule, FeaturesModule,
    RouterModule.forRoot([
      { path: "movie/:id", component: MovieComponent },
      { path: "main", component: MainComponent },      
      { path: "", redirectTo: "main", pathMatch: "full" }
    ]) 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
