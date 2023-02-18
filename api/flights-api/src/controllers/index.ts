import { RequestHandler, Request, Response } from "express";
import { exec } from "../helpers/db_connect";
import {v4 as uuidv4} from "uuid"

interface ExtendedRequest extends Request {
  body: {
    userId: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
  };
}

export const getAllPendingFlights: RequestHandler = async (req, res) => {
  const flights = await exec("getAllPendingFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
};

export const getAllFlights: RequestHandler = async (req, res) => {
  const flights = await exec("getAllFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
};

export const getFlightsOnParticularDay: RequestHandler = async (req, res) => {
  const flights = await exec("getFlightsOnParticularDay");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
};
export const getPastFlights: RequestHandler = async (req, res) => {
  const flights = await exec("getPastFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  console.log(flights);
  res.status(200).json({ flights });
};
export const getPendingFlightsToday: RequestHandler = async (req, res) => {
  const flights = await exec("getPendingFlightsToday");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  console.log(flights);
  return res.status(200).json({ flights });
};

export const addFlight = async (req: ExtendedRequest, res: Response) => {
  console.log(req.body)
  const {
    userId,
    destination,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
  } = req.body;
  try{
    const id = uuidv4()
  await exec("insertOrUpdateFlight", {
    id,
    userId,
    destination,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
  
  });
  return  res.status(201).json({message:"You have successfully booked a flight"})
}catch(error:any){
  return res.status(500).json({error})

}

};
export const updateFlight = async(req:Request,res:Response)=>{
  //admin
  }
export const cancelFlight = async(req:Request,res:Response)=>{
//admin
}