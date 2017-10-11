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
var http_2 = require("@angular/http");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get('app/items')
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getDataById = function (id) {
        return this.http.get("app/items/" + id)
            .map(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.updateData = function (item) {
        return this.http.post('app/items', item)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.updateDataById = function (item, id) {
        return this.http.post('app/items/$(item.id)', item)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_2.Response) {
            var body = error.json() || '';
            var err = error.json().error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
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
//# sourceMappingURL=main.service.js.map