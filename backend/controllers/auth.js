import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.username,
    });
  } catch (err) {
    next(err);
  }
};

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com
