const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
   
}).then(()=>{
    console.log("Connection established")
}).catch((err) => console.log(err));

