const express = require('express');
const app=express();

app.get('/', function(request, response){
   response.send("<h1>Hello, Dashrath</h1>");
});
app.get('/contact', function(req,res){
res.send('<h1>Contact me at :-Dashrath0810@gmail.com</h1>');
});
app.get('/about',function(req,res){
    res.send('<h1>this is used for learning the route</h1>');
});
app.get('/hobbies',function(req,res){
    res.send('<h1>My hobby is Cricket</h1>');
});
app.listen(3000,function(){
    console.log('server started on 3000 port');
});