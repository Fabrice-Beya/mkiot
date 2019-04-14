var mongoose    = require("mongoose");

var obdSchema = mongoose.Schema({
   vin   :{type: String, default:''},
   sim_id   :{type: String, default:''},
   device_id   :{type: String, default:''},
   speed   :{type: String, default:''},
   rpm   :{type: String, default:''},
   engine_load   :{type: String, default:''},
   throttle   :{type: String, default:''},
   intake_temp   :{type: String, default:''},
   coolant_temp   :{type: String, default:''},
   barometric   :{type: String, default:''},
   ambient_temp   :{type: String, default:''},
   gps      :{type: String, default:''}
});

module.exports = mongoose.model("Obd", obdSchema);

