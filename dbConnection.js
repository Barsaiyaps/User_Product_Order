const mongoose = require("mongoose");
const URL = process.env.MONGO_URL

const dbConnection=async()=>{
     try {
           await mongoose.connect(URL)
           console.log("Database is connected")
       } catch (error) {
           console.log(error)
       }
}

module.exports = dbConnection