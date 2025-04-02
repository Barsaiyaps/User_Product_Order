require("dotenv").config();
const express = require("express");
const app = express();
const fs = require('fs')
const path = require('path')
const cors = require("cors");
const morgan = require("morgan");
const dbConnection = require("./dbConnection"); 
const PORT = 5000;

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const orderRoute = require("./routes/order.route");
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan("combined", { stream: accessLogStream  }));

app.use(express.json());
app.use(cors({origin:'http://localhost:5173',  //Replace with the acutal origin of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  //Allowed HTTP methods
    credentials: true                             // If you need cookies or authentication
}));

app.use("/myapp", userRoute);
app.use("/myapp", productRoute);
app.use("/myapp", orderRoute);



app.listen(PORT, async () => {
    await dbConnection()
    console.log("Server is running on port 5000");
}); 