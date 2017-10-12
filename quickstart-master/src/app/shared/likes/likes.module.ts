import { NgModule } from '@angular/core';
import { LikesComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ LikesComponent ],
    exports:    [ LikesComponent ]
})
export class LikesModule { }