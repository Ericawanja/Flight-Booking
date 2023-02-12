import  { RequestHandler, Request, Response } from "express";
import {v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'

import {exec} from '../../helpers/db_connect'

interface ExtendedRequest extends Request{
    body: {firstname:string,
        lastname:string,
        mobile_number:string
         email:string,
        password:string
        residence:string

    }
    info?:string
}

export const register = async (req: ExtendedRequest, res: Response) => {
 try{
    const id = uid()
    const {firstname,lastname, email, password, residence, mobile_number} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    await exec('register', {firstname, lastname,residence, mobile_number, email, password:hashedPassword})

 }catch(error){
    
 }
};

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "_______setting up the auth" });
};
