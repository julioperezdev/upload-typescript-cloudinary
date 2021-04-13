"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhotoById = exports.createPhotos = exports.createProfile = exports.showPhotos = exports.getPhotoById = exports.getPhotos = void 0;
const profileDatabase_1 = require("../database/profileDatabase");
const getPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProfiles = yield profileDatabase_1.getProfiles();
        return res.json({
            message: "Photo successfully finded",
            profiles: allProfiles.rows
        });
    }
    catch (error) {
        return res.json({
            message: "Photo ERROR",
            error: error
        });
    }
});
exports.getPhotos = getPhotos;
const getPhotoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idProfile = parseInt(req.params.idProfile);
    const profile = {
        idProfile: idProfile,
    };
    try {
        const Profile = yield profileDatabase_1.getProfileById(profile);
        return res.json({
            message: "Photo successfully finded",
            profiles: Profile.rows
        });
    }
    catch (error) {
        return res.json({
            message: "Photo ERROR",
            error: error
        });
    }
});
exports.getPhotoById = getPhotoById;
const showPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    console.log(req.file);
    return res.json({
        data1: req.body,
        data2: req.file
    });
});
exports.showPhotos = showPhotos;
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { username } = req.body;
    const newProfile = {
        username: username
    };
    console.log(newProfile);
    const createdProfile = yield profileDatabase_1.saveProfileByUsername(newProfile);
    console.log(createdProfile.rows);
    return res.json({
        message: "Photo successfully saved",
        userCreated: createdProfile.rows[0]
    });
});
exports.createProfile = createProfile;
const createPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const imageB = req.body;
    // console.log(imageB)
    // console.log(req.file)
    console.log(req.body);
    console.log(req.file);
    const { username } = req.body;
    const newProfile = {
        username: username,
        imageURL: req.file.path,
        public_id: req.file.filename
    };
    console.log(newProfile);
    const createProfile = yield profileDatabase_1.saveProfile(newProfile);
    return res.json({
        message: "Photo successfully saved",
    });
});
exports.createPhotos = createPhotos;
const deletePhotoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idProfile = parseInt(req.params.idProfile);
    const profile = {
        idProfile: idProfile,
    };
    try {
        //this have been deleting a profile
        const Profile = yield profileDatabase_1.deleteProfileById(profile);
        //this have been confirming that image exist on LocalDisk, if true them it going to delete
        //DEVELOPMENT ISSUE ----------
        // if(getProfileById(profile)){
        //     await fs.unlink(path.resolve(profile.imageURL))
        // }
        //DEVELOPMENT ISSUE -----------
        return res.json({
            message: "Photo successfully deleted",
            profiles: Profile
        });
    }
    catch (error) {
        return res.json({
            message: "Photo ERROR",
            error: error
        });
    }
});
exports.deletePhotoById = deletePhotoById;
