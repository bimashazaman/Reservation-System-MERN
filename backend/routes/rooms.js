
// import external lib by Bimasha
import express from "express";


const RoomsRouter = express.Router();

RoomsRouter.get("/", (req, res) => {
    res.send('Hi Bimasha Rooms');
})




export default RoomsRouter




//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com
