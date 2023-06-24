const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
// backend code
dotenv.config();

mongoose.connect(
    process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(()=>console.log("Connected to Database"))
.catch((err)=>console.log("Database connection failed"+err))



app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(process.env.PORT || 5000, () => console.log("Server is running..."));