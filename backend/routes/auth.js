
// import external lib by Bimasha
import express from "express";


const authRouter = express.Router();

authRouter.get("/", (req, res) => {
    res.send('Hi Bimasha auth');
})




export default authRouter










//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com