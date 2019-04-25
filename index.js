var express             = require("express"),
    app                 = express(),
    mongoose            = require('mongoose'),
    bodyParser          = require("body-parser"),
    Obd                 = require("./models/odb"),
    Pid                 = require("./models/pid"),
    port                = process.env.PORT || 3000;


//mongoose.connect('mongodb://localhost/mkiot', { useNewUrlParser: true });

let dev_db_url = 'mongodb://sensurobd:sensur001@ds243812.mlab.com:43812/tokenbar';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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

app.post("/pid", function(req, res){
    Pid.create(req.body, function(err, newObd){
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

app.get("/pid", function(req, res){
    Pid.find({}, function(err, obd){
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