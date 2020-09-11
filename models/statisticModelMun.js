const mongoose = require('mongoose');

const statisticSchemaMun = mongoose.Schema({
  NOMBRE_MPIO: {
    type: String,
    required: true,
  },
  DPTO_CNMBR: {
    type: String,
    required: true,
  },
  Coronavirus: {
    type: String,
    required: true,
  },
  Total_Confirmados: {
    type: Number,
    required: true,
  },
  Total_Existentes: {
    type: Number,
    required: true,
  },
  Total_Muertos: {
    type: Number,
    required: true,
  },
  Total_Recuperados: {
    type: Number,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  index: Number,
});

const dailyDataSchemaMun = mongoose.Schema({
  dailyDataMun: [statisticSchemaMun],
  date: {
    type: String,
    required: true,
  },
});

exports.DailyDataMun = mongoose.model('DailyDataMun', dailyDataSchemaMun);
