import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import "reflect-metadata"

@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    idProfile :number;

    @Column()
    username :string;

    @Column()
    imageURL : string;

    @Column()
    public_id: string;

}

export interface IProfile{
    idProfile ?:number;
    username ?:string;
    imageURL ?: string;
    public_id ?: string;
}