var mongoose    = require("mongoose");

var liveSchema = mongoose.Schema({
   vin   :{type: String, default:''},
   devid   :{type: String, default:''},
   number   :{type: String, default:''},
   speed   :{type: String, default:''},
   rpm   :{type: String, default:''},
   dst   :{type: String, default:''},
   rt   :{type: String, default:''},
   fl   :{type: String, default:''},
   time   :{type: String, default:''},
   lat: {type: String, default:''},
   lng: {type: String, default:''},
   trq: {type: String, default:''},
   frp: {type: String, default:''},
   efr: {type: String, default:''},
   trl: {type: String, default:''},
   acd: {type: String, default:''},
   ace: {type: String, default:''},
   acf: {type: String, default:''},
});

module.exports = mongoose.model("Live", liveSchema);

