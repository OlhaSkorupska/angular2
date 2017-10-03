"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var index_1 = require("../movie/index");
var lists_movies_service_1 = require("../lists-movies/lists-movies.service");
var ListsMoviesComponent = (function () {
    function ListsMoviesComponent(http, router, service) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.service = service;
        this.service.getData().subscribe(function (result) { return _this.itemArray = result; }, function (error) { return console.log(error.statusText); });
    }
    ;
    ListsMoviesComponent.prototype.render = function (details) {
        this.router.navigate(['/movie', details.id]);
    };
    return ListsMoviesComponent;
}());
ListsMoviesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lists-movies',
        templateUrl: 'lists-movies.component.html',
        styleUrls: ['lists-movies.component.css'],
        providers: [index_1.MovieModule, lists_movies_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        lists_movies_service_1.DataService])
], ListsMoviesComponent);
exports.ListsMoviesComponent = ListsMoviesComponent;
//# sourceMappingURL=lists-movies.component.js.map