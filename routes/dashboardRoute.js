const express = require('express');
const router = express.Router();
const User = require("../modals/users");
const Product = require("../modals/product");
router.get('/dashboard/:userId',(req,res)=>{

    const { userId } = req.params;

    console.log(userId);
    User.find({_id:userId}, function (err, docs) {
        if (err){
            console.log(err);
            res.redirect('/login');
        }
        else{
            console.log("Result : ", docs);
            res.render("../views/dash/dashboard",{user:docs[0]});
           
        }
    });

    

    console.log("this is dashboard");
});

router.get('/dashboard/:userId/addproduct',(req,res)=>{

    res.render("../views/partials/addProducts");

});
router.post('/dashboard/:userId/addproduct',(req,res)=>{

    // console.log(req.body.title);
    let product = req.body;
    const {userId} =req.params;
    console.log("the user id in product section is ", userId);
    
    product.lastUpdated= new Date().toLocaleDateString();
    product.lastUpdatedTime  = new Date().toLocaleTimeString();
    product.userCreated = userId;

    const prod = new Product({title:product.title,tags:product.tags,image:product.image,desc:product.desc,price:product.price,userCreated:product.userCreated,lastUpdated:product.lastUpdated,lastUpdatedTime:product.lastUpdatedTime});
    prod.save((error,result)=>{
        if(error)
        console.log(error);
        else
        {
            console.log("Product added succesfully ")
            console.log(result);
        }
    })

    res.redirect("/dashboard/userId/addproduct");
    console.log(product);
    
});

module.exports = router;