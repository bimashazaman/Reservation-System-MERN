
// import external lib by Bimasha
import express from "express";
import { register } from "../controllers/auth.js";


const authRouter = express.Router();

authRouter.get('/register', register)


export default authRouter










//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com