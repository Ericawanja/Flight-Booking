import {  Response, Request} from "express";

export const getAllBookedFlights =  (req:Request, res:Response) => {
    res.status(200).json({ message: "setting up booking api controller" });
  }

  