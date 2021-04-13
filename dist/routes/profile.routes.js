"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controller/profile.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = express_1.Router();
router.route("/create")
    .post(profile_controller_1.createProfile);
router.route("/photos")
    .get(profile_controller_1.getPhotos)
    .post(multer_1.default.single('image'), profile_controller_1.createPhotos);
router.route("/photos/show")
    .post(multer_1.default.single('image'), profile_controller_1.showPhotos);
router.route("/photos/:idProfile")
    .get(profile_controller_1.getPhotoById)
    .delete(profile_controller_1.deletePhotoById);
exports.default = router;
