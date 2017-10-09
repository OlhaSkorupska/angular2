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
var main_service_1 = require("../main/main.service");
var MainComponent = (function () {
    function MainComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.pressDownButton = true;
        this.destroyedArray = [];
        this.countDestroyed = 0;
        this.sort = new core_1.EventEmitter();
        this.search = new core_1.EventEmitter();
    }
    ;
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.destroyedArray[this.countDestroyed] = this.service.getData().subscribe(function (result) { return _this.itemArray = result; }, function (error) { return console.log(error.statusText); });
        this.countDestroyed++;
    };
    ;
    MainComponent.prototype.render = function (details) {
        this.router.navigate(['/movie', details.id]);
    };
    MainComponent.prototype.searchHandler = function (value) {
        var _this = this;
        this.destroyedArray[this.countDestroyed] = this.service.getData().subscribe(function (result) {
            _this.itemArray = result.filter(function (item) {
                return (item['title'].toLowerCase().indexOf(value.toLowerCase()) !== -1);
            });
        }, function (error) { return console.log(error.statusText); });
        this.countDestroyed++;
    };
    MainComponent.prototype.sortHandler = function (value) {
        if (this.pressDownButton) {
            this.service.sortData(this.itemArray, value);
        }
        else {
            this.service.sortData(this.itemArray, 'id');
        }
        this.pressDownButton = !this.pressDownButton;
    };
    ;
    MainComponent.prototype.ratingComponetClick = function (clickObj, item) {
        var _this = this;
        item.stars = clickObj.rating;
        this.destroyedArray[this.countDestroyed] = this.service.updateData(item).subscribe(function (result) { return _this.itemArray = result; }, function (error) { return console.log(error.statusText); });
        this.countDestroyed++;
    };
    MainComponent.prototype.ngOnDestroy = function () {
        for (var i = 0; i < this.destroyedArray.length; i++) {
            this.destroyedArray[i].unsubscribe();
        }
    };
    return MainComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MainComponent.prototype, "sort", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MainComponent.prototype, "search", void 0);
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "main",
        templateUrl: "main.component.html",
        styleUrls: ["main.component.css"],
        providers: [main_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        main_service_1.DataService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map