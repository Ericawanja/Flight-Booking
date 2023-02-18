import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { NextFunction,  Request, Response } from "express";
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

interface decodedData{
    id:string,
    firstname:string,
    lastname:string,
    email:string,
    mobile_number:string,
    residence:string

}
interface ExtendedRequest extends Request{
    token:string | JwtPayload
    info?:decodedData
}
export const verify = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const bearer = req.headers["authorization"];
    if (!bearer) {
      return res
        .status(401)
        .json({ status: "failed", message: "Log in first" });
    }
    const secret: string = process.env.SECRET as string;
    const token = bearer.split(" ")[1];
    const decodedData = await jwt.verify(token, secret);
    console.log(decodedData)
    next()
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Log in first" });
  }
};
