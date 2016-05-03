'use strict';



//var PORT = process.env.PORT || 3333;

var PORT =  process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


import * as express from 'express';
import * as os from 'os';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';

const app = express();
const server = app.listen(PORT ,  server_ip_address);


RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());

console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);
