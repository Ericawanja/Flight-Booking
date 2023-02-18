import { Router } from "express";
import {
  addFlight,
  cancelFlight,
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
flightsRouter.delete("/:id", cancelFlight)

export default flightsRouter;
