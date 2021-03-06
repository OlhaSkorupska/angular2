"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var index_1 = require("./index");
//import { SharedModule } from '../shared/shared.module';
var FeaturesModule = (function () {
    function FeaturesModule() {
    }
    return FeaturesModule;
}());
FeaturesModule = __decorate([
    core_1.NgModule({
        imports: [
            index_1.MainModule,
            index_1.MovieModule
        ],
        exports: [
            index_1.MainModule,
            index_1.MovieModule
        ]
    })
], FeaturesModule);
exports.FeaturesModule = FeaturesModule;
//# sourceMappingURL=features.module.js.map