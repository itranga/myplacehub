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
var core_1 = require('angular2/core');
var search_1 = require('../components/search');
var cms_1 = require('../components/cms');
var menu_1 = require('../components/menu');
var todo_service_1 = require('../services/todo-service');
var TodoCmp = (function () {
    function TodoCmp() {
    }
    TodoCmp = __decorate([
        core_1.Component({
            selector: 'body-cmp',
            templateUrl: 'client/dev/todo/templates/body.html',
            styleUrls: ['client/dev/todo/styles/todo.css'],
            providers: [todo_service_1.TodoService],
            directives: [search_1.SearchComponent, cms_1.CmsComponent, menu_1.MenuComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoCmp);
    return TodoCmp;
}());
exports.TodoCmp = TodoCmp;
