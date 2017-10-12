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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var data_service_1 = require("../../core/service/data.service");
var MovieComponent = (function () {
    function MovieComponent(http, route, router, service) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.service = service;
        this.subscriptions = [];
        this.errorMessage = '';
        var sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.service.getDataById(id).subscribe(function (result) { return _this.currentItem = result; }, function (error) { return console.log(error.statusText); });
        });
        this.subscriptions.push(sub);
    }
    MovieComponent.prototype.close = function () {
        this.router.navigate(['/main']);
    };
    MovieComponent.prototype.ratingComponetClick = function (clickObj, item) {
        var _this = this;
        item.stars = clickObj.rating;
        var sub = this.service.updateDataById(item, clickObj.itemId).subscribe(function (result) { return _this.item = result; }, function (error) { return _this.errorMessage = error; });
        this.subscriptions.push(sub);
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "movie",
        templateUrl: "movie.component.html",
        styleUrls: ["movie.component.css"],
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.ActivatedRoute,
        router_1.Router,
        data_service_1.DataService])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map