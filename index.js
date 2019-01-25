var express             = require("express"),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require("body-parser"),
    Obd                 = require("./models/odb"),
    port                = process.env.PORT || 3001;


//mongoose.connect('mongodb://localhost/mkiot', { useNewUrlParser: true });

mongoose.connect("mongodb://tokenbar.documents.azure.com:10255/?ssl=true&replicaSet=globaldb" || database.localUrl,{
    auth:{  
        user:"tokenbar",
        password:"IcLSCWlDrDdIA4AXz4aamdOcixvL8rOLbHzvGWnRq4sRsUMj1ad33REFpRyFAt7TncWzMWmPlyhMs5nxo5w62A==",
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