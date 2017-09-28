"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./features/header/header.component");
var footer_component_1 = require("./features/footer/footer.component");
var main_component_1 = require("./features/main/main.component");
var sort_block_component_1 = require("./features/sort-block/sort-block.component");
var sort_button_component_1 = require("./features/sort-button/sort-button.component");
var search_button_component_1 = require("./features/search-button/search-button.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var inMemoryServer_1 = require("./sample01_inMemServer/inMemoryServer");
var sample_module_1 = require("./sample01_inMemServer/sample.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData), sample_module_1.InMemoryServerModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, main_component_1.MainComponent, sort_block_component_1.SortBlockComponent,
            sort_button_component_1.SortButtonComponent, search_button_component_1.SearchButtonComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map