"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SortButtonComponent = (function () {
    function SortButtonComponent() {
        this.name = 'sort';
    }
    return SortButtonComponent;
}());
SortButtonComponent = __decorate([
    core_1.Component({
        selector: "sort-button",
        templateUrl: "app/features/sort-button/sort-button.component.html",
        styleUrls: ["app/features/sort-button/sort-button.component.css"],
        inputs: ["name"]
    })
], SortButtonComponent);
exports.SortButtonComponent = SortButtonComponent;
//# sourceMappingURL=sort-button.component.js.map