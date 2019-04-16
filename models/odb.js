var mongoose    = require("mongoose");

var obdSchema = mongoose.Schema({
   vin   :{type: String, default:''},
   no   :{type: String, default:''},
   id   :{type: String, default:''},
   spd   :{type: String, default:''},
   rpm   :{type: String, default:''},
   engld   :{type: String, default:''},
   trl   :{type: String, default:''},
   intmp   :{type: String, default:''},
   cotmp   :{type: String, default:''},
   bar   :{type: String, default:''},
   amtmp   :{type: String, default:''},
   gps      :{
      lat: {type: String, default:''},
      lng: {type: String, default:''},
      time: {type: String, default:''}
   }
});

module.exports = mongoose.model("Obd", obdSchema);

