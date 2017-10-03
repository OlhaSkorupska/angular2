import { NgModule } from '@angular/core';
import { MovieComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { StarsModule } from '../stars/index';

@NgModule({
    imports: [ BrowserModule, StarsModule ],
    declarations: [ MovieComponent ],
    exports:    [ MovieComponent ]
})
export class MovieModule { }