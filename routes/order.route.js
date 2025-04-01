const {orderModel}=require("../models/order.model")
const express=require("express")
const orderRoute=express.Router()

orderRoute.get("/get-order",async (req,res)=>{
    try {
        const data = await orderModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

orderRoute.post("/add-order",async (req,res)=>{
    try {
        console.log(req.body)    
        const data = new  orderModel(req.body);
        console.log(data)
        await data.save();
        await res.send('New Order Added Successfully');
    } catch (error) {
        res.send(error)
    }
});

module.exports=orderRoute