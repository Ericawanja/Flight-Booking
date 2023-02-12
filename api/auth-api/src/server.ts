import express, {json, Response, Request} from "express"
import authRouter from "./routes/authRoutes"
const app = express()
app.use(json())



app.use('/auth', authRouter)
app.listen(4000, ()=>{
    console.log("app is running")
})