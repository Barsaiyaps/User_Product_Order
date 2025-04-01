const userModel = require("../models/user.model");
const express = require("express");
const userRoute = express.Router();

userRoute.get("/get-user", async (req, res) => {
    try {
        const data = await userModel.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

userRoute.post("/add-user", async (req, res) => {
    try {
        console.log(req.body);
        const data = new userModel(req.body);
        console.log(data);
        await data.save();
        await res.send("New User Added Successfully");
    } catch (error) {
        res.send(error);
    }
});

module.exports = userRoute;