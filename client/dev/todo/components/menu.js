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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var todo_service_1 = require('../services/todo-service');
var MenuComponent = (function () {
    function MenuComponent(_todoService) {
        this._todoService = _todoService;
        this.todos = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    MenuComponent.prototype._getAll = function () {
        var _this = this;
        this._todoService
            .getAll()
            .subscribe(function (todos) {
            _this.todos = todos;
            console.log(_this.todos);
        });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-cmp',
            templateUrl: 'client/dev/todo/templates/menu.html',
        }),
        __param(0, core_1.Inject(todo_service_1.TodoService)), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
