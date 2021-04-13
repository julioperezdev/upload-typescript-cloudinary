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
exports.deleteProfileById = exports.saveProfile = exports.saveProfileByUsername = exports.getProfileById = exports.getProfiles = void 0;
const database_1 = require("../database/config/database");
const getProfiles = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`SELECT * FROM profile;`);
    return query;
});
exports.getProfiles = getProfiles;
const getProfileById = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`SELECT * FROM profile WHERE idprofile = ${profile.idProfile};`);
    return query;
});
exports.getProfileById = getProfileById;
//INSERT INTO Profile (username) values('maria') RETURNING idProfile, username;
const saveProfileByUsername = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`INSERT INTO Profile (username) VALUES ( '${profile.username}') RETURNING idProfile, username;`);
    return query;
});
exports.saveProfileByUsername = saveProfileByUsername;
const saveProfile = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`INSERT INTO Profile (username, imageUrl, publicId) VALUES ( '${profile.username}', '${profile.imageURL}', '${profile.public_id}');`);
    return query;
});
exports.saveProfile = saveProfile;
const deleteProfileById = (profile) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`DELETE FROM profile WHERE idprofile = ${profile.idProfile};`);
    return query;
});
exports.deleteProfileById = deleteProfileById;
