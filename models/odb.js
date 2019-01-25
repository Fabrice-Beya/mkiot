var mongoose    = require("mongoose");

var obdSchema = mongoose.Schema({
   data : {type: String, default:''},
});

module.exports = mongoose.model("Obd", obdSchema);

