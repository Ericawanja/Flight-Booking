import { RequestHandler } from "express";
import { exec } from "../helpers/db_connect";

export const getAllPendingFlights: RequestHandler = async (req, res) => {
  const flights = await exec("getAllPendingFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
};

export const getAllFlights:RequestHandler = async(req, res)=>{
  const flights = await exec("getAllFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });

}

export const getFlightsOnParticularDay:RequestHandler = async(req, res)=>{
  const flights = await exec("getFlightsOnParticularDay");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
  
}
export const getPastFlights:RequestHandler = async(req, res)=>{
  const flights = await exec("getPastFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  console.log(flights)
  res.status(200).json({ flights });
  
}
export  const getPendingFlightsToday:RequestHandler = async(req,res)=>{
  const flights = await exec("getPendingFlightsToday");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
    console.log(flights)
  return res.status(200).json({ flights });
}