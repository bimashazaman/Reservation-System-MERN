
// import external lib by Bimasha
import express from "express";


const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    res.send('Hi Bimasha users');
})

usersRouter.get("/register", (req, res) => {
    res.send('Hi Bimasha users reg');
})




export default usersRouter
