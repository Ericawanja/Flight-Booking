import {Router} from "express"
import { getAllBookedFlights } from '../controllers/index';

const flightsRouter = Router()
flightsRouter.get("/", getAllBookedFlights)

export default flightsRouter