const mongoose = require('mongoose');

const statisticSchema = mongoose.Schema({
  NOMBRE_DPT: {
    type: String,
    required: true,
  },
  Coronavirus: {
    type: String,
    required: true,
  },
  Casos_Confirmados: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  index: Number,
});

const dailyDataSchema = mongoose.Schema({
  dailyData: [statisticSchema],
  date: {
    type: String,
    required: true,
  },
});

exports.DailyData = mongoose.model('DailyData', dailyDataSchema);
