import { Router } from "express";
import {
  addFlight,
  getAllFlights,
  getAllPendingFlights,
  getFlightsOnParticularDay,
  getPastFlights,
  getPendingFlightsToday,
} from "../controllers/index";

const flightsRouter = Router();
flightsRouter.get("/", getAllFlights);
flightsRouter.get("/allPending", getAllPendingFlights);
flightsRouter.get("/todays", getFlightsOnParticularDay);
flightsRouter.get("/past", getPastFlights);
flightsRouter.get("/upcoming", getPendingFlightsToday);
flightsRouter.post("/book", addFlight);

export default flightsRouter;
