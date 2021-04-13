"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryCredentials = void 0;
const cloudinary_1 = require("cloudinary");
const cloudinaryCredentials = () => {
    cloudinary_1.v2.config({
        cloud_name: '',
        api_key: '',
        api_secret: ''
    });
};
exports.cloudinaryCredentials = cloudinaryCredentials;
