import express, {json, Response, Request} from "express"
const app = express()
app.use(json())

app.get('/auth', (req:Request, res:Response)=>{
    res.status(200).json({message:"setting up the auth"})

})

app.listen(4000, ()=>{
    console.log("app is running")
})