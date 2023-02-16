import {Router} from "express"
import { getAllPendingFlights } from '../controllers/index';

const flightsRouter = Router()
flightsRouter.get("/", getAllPendingFlights)

export default flightsRouter