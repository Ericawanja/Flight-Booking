import express from "express";
import flightsRouter from './routes/index';

const app = express();
app.use("/flights",flightsRouter);

app.listen(5000, ()=>{
    console.log("app is running");
    
})
