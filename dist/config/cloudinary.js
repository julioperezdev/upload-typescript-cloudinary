"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: '',
    api_key: '',
    api_secret: ''
});
exports.default = cloudinary_1.v2;
