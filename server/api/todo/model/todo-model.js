"use strict";
var mongoose = require('mongoose');
var _todoSchema = {
    name: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.Schema(_todoSchema);
