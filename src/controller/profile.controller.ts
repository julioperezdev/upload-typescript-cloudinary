import {Request, Response} from "express"
import { IProfile } from "../model/profile"
import { getProfiles , saveProfile, getProfileById, deleteProfileById} from "../database/profileDatabase"
import path from 'path'
import fs from "fs-extra"

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
