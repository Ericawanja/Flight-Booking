import {Router} from "express"
import { getAllFlights, getAllPendingFlights, getFlightsOnParticularDay, getPastFlights, getPendingFlightsToday } from '../controllers/index';

const flightsRouter = Router()
flightsRouter.get("/", getAllFlights)
flightsRouter.get("/allPending", getAllPendingFlights)
flightsRouter.get("/todays", getFlightsOnParticularDay)
flightsRouter.get("/past", getPastFlights)
flightsRouter.get("/upcoming", getPendingFlightsToday)

export default flightsRouter