const express = require('express');
const app=  express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true})); 

app.get('/',function(req,res){
res.sendFile(__dirname + '/bmiCalculator.html');
});

app.listen(3000, function(){
   console.log("Server started at 3000"); 
});

app.post('/',function(req,res){
    var num1=Number(req.body.weight);
    var num2=Number(req.body.height);
    var result=num1/(num2*num2);
res.send("Your Bmi  is " + result);
});