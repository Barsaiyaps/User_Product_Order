const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
   },
   {
      toJSON: { virtuals: true },   // Allow virtuals in JSON output  ----very important
      toObject: { virtuals: true }, // Allow virtuals in Object output   ---veryimportant
      versionKey: false
   }
);

// Virtual field for user's orders
userSchema.virtual("orders", {
   ref: "Order",
   localField: "_id",
   foreignField: "userId"
});



const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
