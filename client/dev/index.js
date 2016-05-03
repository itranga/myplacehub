/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var core_1 = require("angular2/core");
var main_1 = require('./todo/components/main');
core_1.enableProdMode();
browser_1.bootstrap(main_1.MainCmp, [http_1.HTTP_PROVIDERS]);
