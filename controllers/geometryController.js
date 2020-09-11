const mongoose = require('mongoose');
const geometryModel = require('./../models/geometryModel');
const geometryMunModel = require('./../models/geometryMunModel');
const statisticModelMun = require('./../models/statisticModelMun');
const { default: Axios } = require('axios');

exports.getGeometryByDepartmentIndex = async (req, res) => {
  try {
    if (isNaN(parseInt(req.params.index))) {
      if (req.params.index === 'all') {
        const reqData = await geometryModel.Geometry.find();

        res.status(200).json({
          status: 'success',
          data: reqData,
        });
      } else {
        throw Error('The parameter must be an integer number (0-32)');
      }
    } else if (parseInt(req.params.index) > 32) {
      throw Error('The parameter must be lesser than 32 (0-32)');
    }

    const idx = parseInt(req.params.index);
    const reqData = await geometryModel.Geometry.findOne({ index: idx });

    res.status(200).json({
      status: 'success',
      data: reqData,
    });
  } catch (err) {
    res.status(404).json({
      status: 'success',
      message: err.message,
    });
  }
};

exports.getGeometryByMunicipalityIndex = async (req, res) => {
  try {
    if (isNaN(parseInt(req.params.index))) {
      if (req.params.index === 'all') {
        const reqData = await geometryMunModel.GeometryDataMun.find();

        res.status(200).json({
          status: 'success',
          data: reqData,
        });
      } else {
        throw Error('The parameter must be an integer number (0-32)');
      }
    } else if (parseInt(req.params.index) > 1121) {
      throw Error('The parameter must be lesser than 1121 (0-1121)');
    }

    const idx = parseInt(req.params.index);
    const reqData = await geometryMunModel.GeometryDataMun.findOne({
      index: idx,
    });

    res.status(200).json({
      status: 'success',
      data: reqData,
    });
  } catch (err) {
    res.status(404).json({
      status: 'success',
      message: err.message,
    });
  }
};

exports.getMunicipalityGeometryByDepartment = async (req, res) => {
  try {
    const preData = await statisticModelMun.DailyDataMun.findOne();

    let reqData = [];

    for (let i = 0; i < preData.dailyDataMun.length; i++) {
      if (preData.dailyDataMun[i].DPTO_CNMBR === 'ANTIOQUIA') {
        reqData.push({
          property: preData.dailyDataMun[i],
          geometry: undefined,
        });
      }
    }

    console.log(reqData);

    for (let i = 0; i < reqData.length; i++) {
      let temp = await geometryMunModel.GeometryDataMun.findOne({
        index: reqData[i].property.index,
      });
      console.log(i);
      reqData[i].geometry = temp.geometry;
    }

    res.status(200).json({
      status: 'success',
      data: reqData,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
