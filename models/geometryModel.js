const mongoose = require('mongoose');

const geometrySchema = mongoose.Schema(
  {
    rings: [Array],
    index: Number,
  },
  { collection: 'geometrys' }
);

exports.Geometry = mongoose.model('Geometry', geometrySchema);
