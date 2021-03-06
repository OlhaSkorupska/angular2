import { NgModule } from '@angular/core';
import { MovieComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule} from '../../shared/index';

@NgModule({
    imports: [ BrowserModule, RatingModule ],
    declarations: [ MovieComponent ],
    exports:    [ MovieComponent ]
})
export class MovieModule { }