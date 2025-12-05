import express from "express";
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from "./config/db.js"
dotenv.config();
import orderRoute from "./routes/orderRoute.js"
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB()
 const PORT = 4000;


 
app.get('/', (req, res)=>{
    res.send("server is running")
})
app.use('/api/payment', orderRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})