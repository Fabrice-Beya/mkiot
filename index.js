var express             = require("express"),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require("body-parser"),
    Obd                 = require("./models/odb"),
    port                = process.env.PORT || 3001;


//mongoose.connect('mongodb://localhost/mkiot', { useNewUrlParser: true });

mongoose.connect("mongodb://mkiot.documents.azure.com:10255/?ssl=true" || database.localUrl,{
    auth:{  
        user:"mkiot",
        password:"mzeMQp2hRHR31bV6J8G6E9eDV63UKwW6jFz2NJYYJwXAXhkGcnc8qdANA6rrXjRM7yb3YShhVMqbaL3B3NLCIQ==",
    }}, function(err, db){
        
    });


app.use(bodyParser.json());
    
app.get("/", function(req, res){
    res.send("Welcome to machine kind api");
})

app.post("/obd", function(req, res){
    Obd.create(req.body, function(err, newObd){
        if(err){
            console.log(err);
        } else {
            res.json(newObd);
        }
    })
})

app.get("/obd", function(req, res){
    Obd.find({}, function(err, obd){
        if(err){
            console.log(err);
        } else {
            res.json(obd);
        }
    })
})

app.listen(port, function(){
    console.log("Machine Kind IOT server is live")
})