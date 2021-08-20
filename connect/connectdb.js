const mongoose=require('mongoose');
require("dotenv").config({ path: "./data/.env" });

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
        if(err) {
            console.log(error)
          }
        
            console.log('connected to DB')
        })
    }



module.export =connectDB();