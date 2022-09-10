// import external lib by Bimasha
import express from "express";
import Hotel from "../models/Hotel.js";

const HotelsRouter = express.Router();

//Create by Bimasha
HotelsRouter.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update By Bimasha

HotelsRouter.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete by Bimasha

HotelsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findOneAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted..");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get By Bimasha

HotelsRouter.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
s
//Get all By Bimasha
HotelsRouter.get("/", async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json(error);
    }
  });



export default HotelsRouter;
