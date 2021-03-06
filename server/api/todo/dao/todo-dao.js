"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var todo_model_1 = require('../model/todo-model');
todo_model_1.default.statics.getAll = function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Todo
            .find(_query)
            .exec(function (err, todos) {
            err ? reject(err)
                : resolve(todos);
        });
    });
};
todo_model_1.default.statics.createTodo = function (todo) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(todo)) {
            return reject(new TypeError('Todo is not a valid object.'));
        }
        var _todo = new Todo(todo);
        _todo.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
};
todo_model_1.default.statics.deleteTodo = function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Todo
            .findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
};
var Todo = mongoose.model('City', todo_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Todo;
