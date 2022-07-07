const express = require('express');
const router = express.Router();
const Product = require('../modals/product');
router.get("/products",(req,res)=>{
    

    Product.find({},function(err,products){
        
        if(err)
        console.log("an error occured in products");
        else
        {
            res.render('../views/partials/products',{products:products});
        } 
    })

})

// router.post("/products",(req,res)=>{
    
//     // console.log(req.body.title);
//     let product = req.body;
    
//     product.lastUpdated= new Date().toLocaleDateString();
//     product.lastUpdatedTime  = new Date().toLocaleTimeString();
    
//     res.redirect("/products");
//     console.log(product);
// });


module.exports = router;