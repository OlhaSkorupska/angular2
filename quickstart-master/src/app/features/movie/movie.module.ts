import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ MovieComponent ],
    exports:    [ MovieComponent ]
})
export class MovieModule { }