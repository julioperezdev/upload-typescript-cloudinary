"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'protouser',
    host: 'localhost',
    password: 'passuser',
    database: 'UserDb',
    port: 5432
});
