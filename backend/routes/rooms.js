
// import external lib by Bimasha
import express from "express";


const RoomsRouter = express.Router();

RoomsRouter.get("/", (req, res) => {
    res.send('Hi Bimasha Rooms');
})

RoomsRouter.get("/register", (req, res) => {
    res.send('Hi Bimasha Rooms reg');
})




export default RoomsRouter
