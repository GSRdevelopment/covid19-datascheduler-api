const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  number: {
    type: Number,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;
