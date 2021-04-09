import "reflect-metadata"

import express, {json} from "express"
import morgan from "morgan"
import cors from "cors"
import multer from "multer"
import {v4 as uuidv4} from "uuid"
import path from "path"

import profileRoutes from "./routes/profile.routes"


const app = express();

//setting
app.set(`port`, 3002)

//middlewares
app.use(json())
app.use(cors())
app.use(morgan("dev"))

// const uuid = uuidv4();

// multer.diskStorage({
//     destination: 'uploads/',
//     filename:(req, file, cb) =>{
//         cb(null, uuid )
//     }
// })
// app.use(multer().single('image'));

app.use('/uploads', express.static(path.resolve('uploads')));

//routes
app.use("/profile", profileRoutes)

export default app;
