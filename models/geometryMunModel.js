const mongoose = require('mongoose');

const geometrySchemaMun = mongoose.Schema(
  {
    type: String,
    coordinates: [Array],
    index: Number,
    department: String,
  },
  { collection: 'geometrydatamuns' }
);

exports.GeometryDataMun = mongoose.model('GeometryDataMun', geometrySchemaMun);
