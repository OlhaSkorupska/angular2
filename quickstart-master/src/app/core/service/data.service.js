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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.Url = 'app/items';
    }
    DataService.prototype.getData = function () {
        return this.http.get(this.Url)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getDataById = function (id) {
        return this.http.get(this.Url + "/" + id)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.updateData = function (item) {
        return this.http.post(this.Url, item)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateDataById = function (item, id) {
        return this.http.post(this.Url + "/" + item.id, item)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    DataService.prototype.sortData = function (itemArray, value) {
        itemArray.sort(function (a, b) {
            if (a[value] < b[value]) {
                return -1;
            }
            else if (a[value] > b[value]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return itemArray;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map