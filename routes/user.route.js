const userModel = require("../models/user.model");
const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcrypt");

userRoute.get("/get-user", async (req, res) => {
    try {
        const data = await userModel.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

userRoute.get("/get-user/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const data = await userModel.findById(req.params.id).populate("orders");
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

userRoute.delete("/delete-user/:id", async (req, res) => {
    try {
        const data = await userModel.findByIdAndDelete(req.params.id);
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

userRoute.post("/add-user", async (req, res) => {
    try {
        const {name,email,password }=req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log({name,email,hashedPassword});
        const data = new userModel({name,email,password:hashedPassword});
        console.log(data);
        await data.save();
        await res.send("New User Added Successfully");
    } catch (error) {
        res.send({msg:"Something went wrong",error});
    }
});

module.exports = userRoute;