import { NgModule } from '@angular/core';
import { RatingComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ RatingComponent ],
    exports:    [ RatingComponent ]
})
export class RatingModule { }