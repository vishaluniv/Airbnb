const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

async function connectToMongoDB() {
    
    try {
      const db = await mongoose.connect(
            'mongodb+srv://deepali4843be21:jPwf4GKRXGxYAUiV@cluster0.zzg5loc.mongodb.net/myFirstDatabase',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
  
      console.log("Connected to MongoDB");
      return db;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  
  }
  

connectToMongoDB();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname+"/uploads")); // For getting images that are downloaded by link

app.use(cors({
    credentials:true,
    origin:'https://airbnb-1-bpw0.onrender.com' 
}));


const userAuthRoutes = require("./routes/userAuthRoutes");
const placeRoutes = require("./routes/placeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/", userAuthRoutes);
app.use("/", placeRoutes);
app.use("/",bookingRoutes);


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});
