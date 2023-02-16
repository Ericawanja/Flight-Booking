import { RequestHandler } from "express";
import { exec } from "../helpers/db_connect";

export const getAllPendingFlights: RequestHandler = async (req, res) => {
  const flights = await exec("getAllPendingFlights");
  if (flights.length === 0)
    return res.status(404).json({ message: "No flights found" });
  res.status(200).json({ flights });
};
