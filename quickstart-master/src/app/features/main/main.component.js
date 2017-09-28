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
var MainComponent = (function () {
    function MainComponent(http) {
        this.http = http;
        this.title = '';
        this.likes = 0;
        this.posterUrl = '';
        this.director = '';
        this.actors = '';
        this.genres = '';
        this.description = '';
        this.toggoleShowHide = "hidden";
        this.widthMainContent = "100%";
    }
    MainComponent.prototype.like = function (item) {
        var _this = this;
        item["likes"] = item["likes"] + 1;
        this.http.put("app/items", item).subscribe(function (result) {
            var json = result.json();
            if (json)
                _this.itemArray.push(json.data);
        }, function (error) { return console.log(error.statusText); });
    };
    MainComponent.prototype.dislike = function (item) {
        var _this = this;
        item["likes"] = item["likes"] - 1;
        this.http.put("app/items", item).subscribe(function (result) {
            var json = result.json();
            if (json)
                _this.itemArray.push(json.data);
        }, function (error) { return console.log(error.statusText); });
    };
    MainComponent.prototype.close = function () {
        this.toggoleShowHide = "hidden";
        this.widthMainContent = "100%";
    };
    MainComponent.prototype.render = function (details) {
        this.title = details["title"];
        this.likes = details["likes"];
        this.posterUrl = details["posterUrl"];
        this.director = details["director"];
        this.actors = details["actors"];
        this.genres = details["genres"];
        this.description = details["description"];
        this.toggoleShowHide = "visible";
        this.widthMainContent = "50%";
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("app/items").subscribe(function (result) { return _this.itemArray = result.json().data; }, function (error) { return console.log(error.statusText); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "main",
        templateUrl: "app/features/main/main.component.html",
        styleUrls: ["app/features/main/main.component.css"]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map