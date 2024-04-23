import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { Connect } from "./Utils/DbConnect.js"
import UserRoute from "./routes/userRoute.js"
import { Crone } from "./Utils/croneJob.js"
const app = express()
app.use(express.json())
app.use('/user', UserRoute)

//crone-job
Crone()

//if page not found
app.use((req, res, next) => {
    res.status(404).json({message: "page not found"})
    next()
})

//connects to db
Connect(app)
