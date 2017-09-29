"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MovieComponent = (function () {
    function MovieComponent() {
        this.toggoleShowHide = '';
        this.widthMainContent = '';
    }
    MovieComponent.prototype.close = function () {
        this.toggoleShowHide = "hidden";
        this.widthMainContent = "100%";
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: "movie",
        templateUrl: "app/features/movie/movie.component.html",
        styleUrls: ["app/features/movie/movie.component.css"]
    })
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map