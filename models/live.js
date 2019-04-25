var mongoose    = require("mongoose");

var liveSchema = mongoose.Schema({
   vin   :{type: String, default:''},
   devid   :{type: String, default:''},
   number   :{type: String, default:''},
   speed   :{type: String, default:''},
   rpm   :{type: String, default:''},
   distance   :{type: String, default:''},
   runtime   :{type: String, default:''},
   fuel   :{type: String, default:''},
   time   :{type: String, default:''},
   lat: {type: String, default:''},
   lng: {type: String, default:''},
});

module.exports = mongoose.model("Live", liveSchema);

