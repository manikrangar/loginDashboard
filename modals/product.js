const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    tags:{
        type:[String],
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,   
     },
    lastUpdated:Date,
    lastUpdatedTime:String,
})

const Product  = mongoose.model('Product',productSchema);
module.exports = Product;