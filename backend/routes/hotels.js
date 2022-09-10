
// import external lib by Bimasha
import express from "express";


const HotelsRouter = express.Router();

HotelsRouter.get("/", (req, res) => {
    res.send('Hi Bimasha Hotels');
})

HotelsRouter.get("/register", (req, res) => {
    res.send('Hi Bimasha Hotels reg');
})




export default HotelsRouter


