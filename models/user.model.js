const mongoose = require("mongoose");   

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      }

   } 
)

userSchema.virtual("orders",{
   ref: "Order",                    // Referencing the Order model
   localField: "_id",               // `_id` in User model
   foreignField: "userId"           // `userId` in Order model
})

userSchema.virtual("cart",{
   ref: "Cart",
   localField: "_id",
   foreignField: "userId"
})


const userModel = mongoose.model("User", userSchema);    

module.exports = { userModel };