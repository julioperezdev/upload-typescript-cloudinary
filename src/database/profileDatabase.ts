import {getRepository} from "typeorm"
import {QueryResult} from "pg"
import {pool} from "../database/config/database"
import {Profile, IProfile} from "../model/profile"



export const getProfiles = async() =>{
    const query: QueryResult = await pool.query(`SELECT * FROM profile;`);
    return query;
}

export const getProfileById = async(profile: IProfile) =>{
    const query: QueryResult = await pool.query(`SELECT * FROM profile WHERE idprofile = ${profile.idProfile};`);
    return query;
}


export const saveProfile = async(profile: IProfile) =>{
    const query: QueryResult = await pool.query(`INSERT INTO Profile (username, imageUrl, publicId) VALUES ( '${profile.username}', '${profile.imageURL}', '${profile.public_id}');`);
    return query;
}


export const deleteProfileById = async(profile: IProfile) =>{
    const query: QueryResult = await pool.query(`DELETE FROM profile WHERE idprofile = ${profile.idProfile};`);
    return query;
}