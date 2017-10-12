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
var data_service_1 = require("../../core/service/data.service");
var MainComponent = (function () {
    function MainComponent(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.pressDownButton = true;
        this.subscriptions = [];
        this.sort = new core_1.EventEmitter();
        this.search = new core_1.EventEmitter();
    }
    ;
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.service.getData()
            .subscribe(function (result) { return _this.itemArray = result; }, function (error) { return _this.errorMessage = error; });
        this.subscriptions.push(sub);
    };
    ;
    MainComponent.prototype.render = function (details) {
        this.router.navigate(['/movie', details.id]);
    };
    MainComponent.prototype.searchHandler = function (value) {
        var _this = this;
        var sub = this.service.getData().subscribe(function (result) {
            _this.itemArray = result.filter(function (item) {
                return (item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
            });
        }, function (error) { return _this.errorMessage = error; });
        this.subscriptions.push(sub);
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
        var sub = this.service.updateDataById(item, clickObj.itemId).subscribe(function (result) { return _this.item = result; }, function (error) { return _this.errorMessage = error; });
        this.subscriptions.push(sub);
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
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
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        data_service_1.DataService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map