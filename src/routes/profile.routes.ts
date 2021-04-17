import {Router} from "express"
import { createProfile, getPhotos, createPhotos , getPhotoById, deletePhotoById, showPhotos, UploadPhotosByUsername} from "../controller/profile.controller"
import multer from "../libs/multer";

const router = Router();

router.route("/create")
.post(createProfile)

router.route("/photos")
.get(getPhotos)
.post(multer.single('image'), createPhotos)

router.route("/photos/show/:username")
.post(multer.single('image'), showPhotos)

router.route("/photos/upload-image/:username")
.post(multer.single('image'), UploadPhotosByUsername)


router.route("/photos/:idProfile")
.get(getPhotoById)
.delete(deletePhotoById)



export default router;