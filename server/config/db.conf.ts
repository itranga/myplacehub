"use strict";

import * as mongoose from 'mongoose';
import * as dbConst from '../constants/db.json';

export class DBConfig {
    static init():void {
      const URL = dbConst.localhost;

      mongoose.connect(URL);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    }
};
