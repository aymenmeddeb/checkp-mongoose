const mongoose=require('mongoose');

const personSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    favoriteFoods:{
        type:[String],
        required:true
    }
})
module.exports =mongoose.model('Person',personSchema);