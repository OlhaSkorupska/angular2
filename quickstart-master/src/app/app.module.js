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
var features_module_1 = require("./features/features.module");
var index_1 = require("./features/index");
var main_component_1 = require("./features/main/main.component");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var inMemoryServer_1 = require("./inMemoryServer/inMemoryServer");
var sample_module_1 = require("./inMemoryServer/sample.module");
var index_2 = require("./shared/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, index_2.HeaderModule, index_2.FooterModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData), sample_module_1.InMemoryServerModule, features_module_1.FeaturesModule,
            router_1.RouterModule.forRoot([
                { path: "movie/:id", component: index_1.MovieComponent },
                { path: "main", component: main_component_1.MainComponent },
                { path: "", redirectTo: "main", pathMatch: "full" }
            ])
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map