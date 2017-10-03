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
var lists_movies_service_1 = require("../lists-movies/lists-movies.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var LikesComponent = (function () {
    function LikesComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
    }
    ;
    LikesComponent.prototype.like = function (item, like) {
        var _this = this;
        like ? item["likes"] = item["likes"] + 1 :
            item["likes"] = item["likes"] - 1;
        this.service.updateData(item).subscribe(function (result) { return _this.itemArray = result; }, function (error) { return console.log(error.statusText); });
    };
    return LikesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikesComponent.prototype, "item", void 0);
LikesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'likes',
        templateUrl: 'likes.component.html',
        styleUrls: ['likes.component.css'],
        providers: [lists_movies_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        lists_movies_service_1.DataService])
], LikesComponent);
exports.LikesComponent = LikesComponent;
//# sourceMappingURL=likes.component.js.map