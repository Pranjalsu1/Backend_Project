const mongoose = require('mongoose');
exports.Connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then( ()=>{
        console.log("DB connected successfully");
    })
    .catch( (err)=>{
        console.log("some error occured");
        console.error(err);
    })
}