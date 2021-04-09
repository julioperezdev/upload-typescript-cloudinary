"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const app = express_1.default();
//setting
app.set(`port`, 3002);
//middlewares
app.use(express_1.json());
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
// const uuid = uuidv4();
// multer.diskStorage({
//     destination: 'uploads/',
//     filename:(req, file, cb) =>{
//         cb(null, uuid )
//     }
// })
// app.use(multer().single('image'));
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
//routes
app.use("/profile", profile_routes_1.default);
exports.default = app;
