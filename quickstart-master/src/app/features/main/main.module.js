"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var index_1 = require("./index");
var platform_browser_1 = require("@angular/platform-browser");
var index_2 = require("../likes/index");
var index_3 = require("../stars/index");
var index_4 = require("../sort-button/index");
var index_5 = require("../sort-block/index");
var index_6 = require("../movie/index");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [index_5.SortBlockModule, index_6.MovieModule, index_4.SortButtonModule, index_3.StarsModule, index_2.LikesModule, platform_browser_1.BrowserModule],
        declarations: [index_1.MainComponent],
        exports: [index_1.MainComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map