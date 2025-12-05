import express from "express";
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from "./config/db.js"
dotenv.config();
import orderRoute from "./routes/orderRoute.js"
const app = express();

app.use(cors());

await connectDB()
 const PORT = 4000;


 
app.get('/', (req, res)=>{
    res.send("server is running")
})
app.use('/api/order/', orderRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})