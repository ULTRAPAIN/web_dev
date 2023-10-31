const { log } = require('console');
const express= require('express');
const https= require("https");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});




app.post("/",function(req,res){

console.log("post request recieved");
const query=req.body.cityName;
    const apikey="bd2eaf67183ca5ffe819ebad5f57cac2";
    const unit="metric";
    const lang="hi";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit+"&lang="+lang+"";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on('data', function(data){
            const json=JSON.parse(data);
            console.log(json);
            const temp=json.main.temp;
            const description=json.weather[0].main;
            const icon=json.weather[0].icon;
            const imageUrl="https://openweathermap.org/img/wn/" + icon+"@2x.png"
            console.log(temp);
            console.log(description); 
            res.write("<h1>The Temperature in "+query+" is " + temp +"</h1>")
            res.write("<h1>  The weather is "+ description+"</h1>")
            res.write("<img src="+imageUrl+">")
            res.send() ;
        })
    })
});
app.listen(3000,function(){
    console.log("Server started");
})