/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {enableProdMode} from "angular2/core";


import {MainCmp} from './todo/components/main';

enableProdMode();

bootstrap(MainCmp, [HTTP_PROVIDERS]);
