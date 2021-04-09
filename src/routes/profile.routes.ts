import {Router} from "express"
import { getPhotos, createPhotos , getPhotoById, deletePhotoById} from "../controller/profile.controller"
import multer from "../libs/multer";

const router = Router();

router.route("/photos")
.get(getPhotos)
.post(multer.single('image'), createPhotos)


router.route("/photos/:idProfile")
.get(getPhotoById)
.delete(deletePhotoById)



export default router;