import { RequestHandler, Request, Response } from "express";
import { exec } from "../helpers/db_connect";
import { v4 as uuidv4 } from "uuid";

interface ExtendedRequest extends Request {
  body: {
    id?: string;
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
  console.log(req.body);
  const {
    userId,
    destination,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
  } = req.body;
  let today = new Date().getTime();
  let departureD = new Date(departureDate).getTime();
  let arrivalD = new Date(arrivalDate).getTime();
  if (departureD < today || arrivalD < today || departureD > arrivalD) {
    return res
      .status(504)
      .json({ message: "Check on you departure date or arrival date" });
  }
  let now = new Date().toLocaleTimeString();
  let departureT = new Date().toLocaleTimeString();
  if (departureD === today && now > departureT) {
    return res.status(504).json({ message: "Check on you departure time" });
  }
  try {
    const id = uuidv4();
    await exec("insertOrUpdateFlight", {
      id,
      userId,
      destination,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
    });
    return res
      .status(201)
      .json({ message: "You have successfully booked a flight" });
  } catch (error: any) {
    return res.status(500).json({ error });
  }
};
export const updateFlight = async (req: Request, res: Response) => {
  //admin

  const {
    id,
    userId,
    destination,
    departureDate,
    departureTime,
    arrivalDate,
    arrivalTime,
  } = req.body;
  let today = new Date().getTime();
  let departureD = new Date(departureDate).getTime();
  let arrivalD = new Date(arrivalDate).getTime();
  if (departureD < today || arrivalD < today || departureD > arrivalD) {
    return res
      .status(504)
      .json({ message: "Check on you departure date or arrival date" });
  }
  let now = new Date().toLocaleTimeString();
  let departureT = new Date().toLocaleTimeString();
  if (departureD === today && now > departureT) {
    return res.status(504).json({ message: "Check on you departure time" });
  }
  try {
    await exec("insertOrUpdateFlight", {
      id,
      userId,
      destination,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
    });
    return res
      .status(201)
      .json({ message: "You have successfully booked a flight" });
  } catch (error: any) {
    return res.status(500).json({ error });
  }
};
export const cancelFlight: RequestHandler<{ id: string }> = async (
  req,
  res
) => {
  //admin

  const id = req.params.id;
  console.log(id);
  try {
    await exec("cancelFlight", { id: id });
    res.status(200).json({ message: "succesfully canceled the flight" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
