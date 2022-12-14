// import external lib by Bimasha
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"

//import internal by Bimasha
import authRouter from "./routes/auth.js";
import HotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";
import RoomsRouter from "./routes/rooms.js";

//app scrap by bimasha
const app = express();
dotenv.config();



app.use(express.json());
app.use(cookieParser())


//mongo connect by Bimasha
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected with DB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("Disconnected", () => {
  console.log("Mongo Disconnected");
});

//middlewares By Bimasha
app.use("/", (req,res)=>{
  res.send("Hi")
});
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/hotels", HotelsRouter);
app.use("/rooms", RoomsRouter);

app.use((err,req,res,next)=>{

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something Went wrong"

    return res.status(errorStatus).json(
        {
            success: false,
            message: errorMessage,
            stack: err.stack,
        }
    );
})


app.listen(8800, () => {
  connect();
  console.log("Connected to bacakend");
});

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com
