import {Request, Response} from "express"
import { IProfile } from "../model/profile"
import { getProfiles , saveProfile, saveProfileByUsername, getProfileById, deleteProfileById, uploadImageInformationProfileByUsername} from "../database/profileDatabase"
import path from 'path'
import fs from "fs-extra"
import cloudinary from "../config/cloudinary"



export const getPhotos = async(req: Request, res:Response): Promise<Response> => {


    try{
        const allProfiles = await getProfiles();
    
        return res.json({
            message: "Photo successfully finded",
            profiles: allProfiles.rows
        })
    }catch(error){
        return res.json({
            message: "Photo ERROR",
            error: error
            
        })
    }
}

export const getPhotoById = async(req: Request, res:Response): Promise<Response> => {

   
    const idProfile = parseInt(req.params.idProfile);
    const profile:IProfile = {
        idProfile: idProfile,
    }
    try{
        const Profile = await getProfileById(profile);
    
        return res.json({
            message: "Photo successfully finded",
            profiles: Profile.rows
        })
    }catch(error){
        return res.json({
            message: "Photo ERROR",
            error: error
            
        })
    }
}

export const showPhotos = async(req: Request, res:Response): Promise<Response> => {
    const usernameProfile = req.params.username
    console.log(req.file)
    return res.json({
        data1: usernameProfile,
        data2: req.file
        
    })
}


export const UploadPhotosByUsername = async(req: Request, res:Response): Promise<Response> => {
    const usernameProfile = req.params.username
    console.log(req.file)

    const result = await cloudinary.uploader.upload(req.file.path);

    
    const profile:IProfile = {
        username : usernameProfile,
        imageURL: result.url,
        public_id: result.public_id
    }
    const updatedProfile = await uploadImageInformationProfileByUsername(profile);
    
    await fs.unlink(req.file.path)

    return res.json({
        usernameUpdated: updatedProfile,
        status: 200 
    })
}

export const createProfile = async(req: Request, res:Response): Promise<Response> => {

    console.log(req.body)
    const { username} = req.body;
    const newProfile: IProfile = {
        username: username
    }
    console.log(newProfile)
    const createdProfile = await saveProfileByUsername(newProfile);
    console.log(createdProfile.rows)

    return res.json({
        message: "Photo successfully saved",
        userCreated: createdProfile.rows[0]
        
    })
}

export const createPhotos = async(req: Request, res:Response): Promise<Response> => {

    // const imageB = req.body;
    // console.log(imageB)
    // console.log(req.file)
    console.log(req.body)
    console.log(req.file)
    const { username} = req.body;
    const newProfile: IProfile = {
        username: username,
        imageURL: req.file.path,
        public_id: req.file.filename
        
    }
    console.log(newProfile)
    const createProfile = await saveProfile(newProfile);


    return res.json({
        message: "Photo successfully saved",
        
    })
}

export const deletePhotoById = async(req: Request, res:Response): Promise<Response> => {

   
    const idProfile = parseInt(req.params.idProfile);
    const profile:IProfile = {
        idProfile: idProfile,
    }
    try{
        //this have been deleting a profile
        const Profile = await deleteProfileById(profile);
        
        //this have been confirming that image exist on LocalDisk, if true them it going to delete
        //DEVELOPMENT ISSUE ----------
        // if(getProfileById(profile)){
        //     await fs.unlink(path.resolve(profile.imageURL))
        // }
        //DEVELOPMENT ISSUE -----------
    
        return res.json({
            message: "Photo successfully deleted",
            profiles: Profile
        })
    }catch(error){
        return res.json({
            message: "Photo ERROR",
            error: error
            
        })
    }
}
