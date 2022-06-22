const express = require('express');
const router = express.Router();
const User=require("../modals/users");



router.get("/signup",(req,res)=>{

    res.render("../views/auth/signup");
    console.log("this is a get of signup");
    console.log(req.query);

    
})


router.post("/signup",async (req,res)=>{
    await console.log("this is a post of signup");
    try {
    await console.log(req.body);
    // alert("this is em");

        const {name, email, psw}=req.body;
        const user=new User({name:name,email:email,password:psw});
        user.save((error,result)=>{
            if(error)
            console.log("Dublicate email");
            else
            console.log("---------","data saved to data base",user,"------");

        });
        
    }catch(e) {

       console.log(e);
        
    }

    res.redirect('/login');
    // res.render("../views/auth/signup");
    
    

})

module.exports = router;