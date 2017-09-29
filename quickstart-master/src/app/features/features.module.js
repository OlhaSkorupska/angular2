"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var footer_module_1 = require("./footer/footer.module");
var header_module_1 = require("./header/header.module");
var main_module_1 = require("./main/main.module");
var sort_block_module_1 = require("./sort-block/sort-block.module");
var search_button_module_1 = require("./search-button/search-button.module");
var sort_button_module_1 = require("./sort-button/sort-button.module");
var lists_movies_module_1 = require("./lists-movies/lists-movies.module");
var movie_module_1 = require("./movie/movie.module");
var FeaturesModule = (function () {
    function FeaturesModule() {
    }
    return FeaturesModule;
}());
FeaturesModule = __decorate([
    core_1.NgModule({
        imports: [
            footer_module_1.FooterModule,
            header_module_1.HeaderModule,
            main_module_1.MainModule,
            sort_block_module_1.SortBlockModule,
            search_button_module_1.SearchButtonModule,
            sort_button_module_1.SortButtonModule,
            lists_movies_module_1.ListsMoviesModule,
            movie_module_1.MovieModule
        ],
        exports: [
            footer_module_1.FooterModule,
            header_module_1.HeaderModule,
            main_module_1.MainModule,
            sort_block_module_1.SortBlockModule,
            search_button_module_1.SearchButtonModule,
            sort_button_module_1.SortButtonModule,
            lists_movies_module_1.ListsMoviesModule,
            movie_module_1.MovieModule
        ]
    })
], FeaturesModule);
exports.FeaturesModule = FeaturesModule;
//# sourceMappingURL=features.module.js.map