import {  RequestHandler} from "express";

export const getAllBookedFlights:RequestHandler =  (req, res) => {
    res.status(200).json({ message: "setting up booking api controller" });
  }

  