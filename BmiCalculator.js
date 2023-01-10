const express = require("express");

const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded(extended=true));
app.get("/" ,(req,res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/",(req,res)=>{
    var weight =(Number)(req.body.weight);
    var height =(Number)(req.body.height);
    const bmi= Math.floor(weight/(height*height));
    console.log(bmi);
   res.status(200).send("Your BMI is "+ bmi.toString());
});
app.listen(3000, (req,res)=>{
    console.log("server Started");
});