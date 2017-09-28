import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './features/header/header.component';
import { FooterComponent }  from './features/footer/footer.component';
import { MainComponent }  from './features/main/main.component';
import { SortBlockComponent }  from './features/sort-block/sort-block.component';
import { SortButtonComponent }  from './features/sort-button/sort-button.component';
import { SearchButtonComponent }  from './features/search-button/search-button.component';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ItemData } from "./sample01_inMemServer/inMemoryServer";
import { InMemoryServerModule } from "./sample01_inMemServer/sample.module";

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    InMemoryWebApiModule.forRoot(ItemData), InMemoryServerModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, MainComponent, SortBlockComponent,
    SortButtonComponent, SearchButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

