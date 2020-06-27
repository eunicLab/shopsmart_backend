const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  username: { type: String, required: false },
  listObject: { type: Array, required: false },
  email: { type: String, required: false },
});

module.exports = mongoose.model('Thing', thingSchema);
