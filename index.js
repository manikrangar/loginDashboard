const path=require("path");
const express=require("express");
const dotenv=require('dotenv')
const mongoose =require("mongoose");
const { Http2ServerRequest } = require("http2");

// const express = require('express')
dotenv.config({path: `${__dirname}/config.env`});


const app = express()

const port =process.env.PORT|| 8000;





main().catch(err => console.log(err)).finally(console.log("connected to the database "));


async function main() {
  await mongoose.connect(process.env.DATABASE_URI);
}

// Setting view engin to ejs for serving static files
app.set("view engine", "ejs");

// Set the path of views folder 
app.set("views", path.join(__dirname, "views"));

// Middleware to encode url
app.use(express.urlencoded())

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
app.use(session({
  secret : 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


const loginRoute=require('./routes/loginRoute');
const signupRoute=require('./routes/signupRoute');

app.use(signupRoute);
// const signupRoute=require("./routes/signupRoute");

// signupRoute.get()
app.use(loginRoute);
app.get("/",(req,res)=>{

  res.render("./partials/navbar");
});



app.listen(port, () => {
  console.log(`Server started at localhost ${port}`)
})
