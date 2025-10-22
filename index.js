const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const db =require("./config/database");
db.Connect();

// import routes and mount

const user = require("./routes/user");
app.use("/api/v1",user);

// activation

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("HI this is {Pranjal Suryavanshi}");
});