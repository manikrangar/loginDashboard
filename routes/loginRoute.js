const express = require('express');
const router = express.Router();
const User=require("../modals/users");
// const session = require('express-session');
// const flash = require('connect-flash');


router.get("/login",(req,res)=>{
    
    // const errorMsg=req.flash("errorMessage");
    res.render("../views/auth/login",{err:""});
    console.log("this is a get of login page");
    console.log(req.query);
});

router.post("/login",(req,res)=>{
    console.log("this is post of login page");
    console.log(req.body);

    const {email,psw}=req.body;

    console.log("the data base view is: ")
    let sent=0;
    User.find({email: email ,password:psw}, function(err, result) {
        if(err)
        console.log("there is some credential error");
        else{
            if(result.length===0){
                
                
                console.log("no data found invalid credentials");
                res.render("../views/auth/login",{err:"Invalid Credentials  Please Try Again !!"});
                // req.flash("errorMessage","Invalid Credentials Try Again !!");
            }
            else{

                console.log(result);
                sent=1;
                // res.redirect("/user/dashboard")
                // req.flash("errorMessage","Logged In Successfully");
                res.redirect(`/dashboard/${result[0]._id}`);
            }
        }
        
    });

});

module.exports=router;
