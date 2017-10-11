import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MovieComponent } from './features/index';
import { MainComponent } from './features/main/main.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ]
})
export class InMemoryServerModule {

}