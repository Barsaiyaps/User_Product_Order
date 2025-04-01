const {productModel}=require("../models/product.model")
const express=require("express")
const productRoute=express.Router()

productRoute.get("/get-product",async (req,res)=>{
    try {
        const data = await productModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})  

productRoute.post("/add-product",async (req,res)=>{
    try {
        console.log(req.body)
        const data = new  productModel(req.body);
        console.log(data)
        await data.save();
        await res.send('New Product Added Successfully');
    } catch (error) {
        res.send(error)
    }           
})

module.exports=productRoute