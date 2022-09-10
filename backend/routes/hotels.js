// import external lib by Bimasha
import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotelById,
  getAllHotelS,
  updateHotel,
} from "../controllers/hotel.js";

const HotelsRouter = express.Router();

//CRUD -Bimasha
HotelsRouter.post("/", createHotel);
HotelsRouter.put("/:id", updateHotel);
HotelsRouter.delete("/:id", deleteHotel);
HotelsRouter.get("/:id", getAllHotelById);
HotelsRouter.get("/", getAllHotelS);

export default HotelsRouter;

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com
