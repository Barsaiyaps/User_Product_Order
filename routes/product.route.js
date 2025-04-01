const productModel=require("../models/product.model")
const express=require("express")
const productRoute=express.Router()


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

productRoute.get("/get-product",async (req,res)=>{
    try {
        const data = await productModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}) 

productRoute.get("/get-product/:id",async (req,res)=>{
    try {
        const data = await productModel.findById(req.params.id);
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

productRoute.put("/update-product/:id",async (req,res)=>{
    try {
        const data = await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

productRoute.delete("/delete-product/:id",async (req,res)=>{
    try {
        const data = await productModel.findByIdAndDelete(req.params.id);
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


module.exports=productRoute