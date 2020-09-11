const mongoose = require('mongoose');

const geometrySchemaMun = mongoose.Schema(
  {
    type: String,
    geometry: [Array],
    index: Number,
  },
  { collection: 'geometrydatamuns' }
);

exports.GeometryDataMun = mongoose.model('GeometryDataMun', geometrySchemaMun);
