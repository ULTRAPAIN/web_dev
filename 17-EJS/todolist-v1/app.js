// jshint esversion:6

const express = require('express');
const bodyParser= require('body-parser');

var items=["Ediiting", "Coding", "Typing Trainer"];


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var day=new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};

var Today= day.toLocaleDateString("en-US",options);
console.log(Today);


app.get('/', function(req, res){
res.render('index',{ current_day: Today,items:items});

});


app.get('/work',function(req, res){
    res.render("list.ejs",{
    current_day:"Work-List",
    items:work_items
    });
})

app.post("/work",function(req,res){
    let item=req.body.newItem;
    work_items.push(item);
    res.redirect("/work");
});


app.post('/', function(req, res){
    ;
    var item=req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect('/');
});
app.listen(3000,function(){
    console.log('listening on port 3000');
}); 