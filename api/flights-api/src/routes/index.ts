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
import { verify } from "../middlewares/verify";

const flightsRouter = Router();
flightsRouter.get("/", verify, getAllFlights);
flightsRouter.get("/allPending", verify, getAllPendingFlights);
flightsRouter.get("/todays", verify, getFlightsOnParticularDay);
flightsRouter.get("/past",verify, getPastFlights);
flightsRouter.get("/upcoming",verify, getPendingFlightsToday);
flightsRouter.post("/book", verify, addFlight);
flightsRouter.delete("/:id",verify, cancelFlight)

export default flightsRouter;
