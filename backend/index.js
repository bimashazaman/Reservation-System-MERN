
// import external lib by Bimasha
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"


//import internal by Bimasha
import authRouter from "./routes/auth.js";

//app scrap by bimasha
const app = express();
dotenv.config()

//mongo connect by Bimasha
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected with DB');
    }
    catch(error) {
        throw error;
    }
}

mongoose.connection.on("Disconnected", ()=> {
    console.log("Mongo Disconnected");
})

//middlewares By Bimasha
app.use("/auth", authRouter);



app.listen(8800, ()=> {
    connect()
    console.log("Connected to bacakend");
})


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com