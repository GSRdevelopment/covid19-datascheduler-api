const axios = require('axios');
const statisticModel = require('./../models/statisticModel');
const statisticModelMun = require('./../models/statisticModelMun');

exports.createStatistic = async (req, res) => {
  try {
    let data = req.body;
    let daily = new statisticModel.DailyData();

    for (let i = 0; i < data.length; i++) {
      daily.dailyData.push(data[i]);
    }

    const todayDate = () => {
      let tempDate = new Date().toISOString();
      let temp = tempDate.slice(0, 10);
      return `${temp.slice(0, 4)}${temp.slice(5, 7)}${temp.slice(8, 10)}`;
    };

    daily.date = todayDate();

    const response = await statisticModel.DailyData.create(daily);

    console.log(`Database updated successfully at ${new Date().toISOString()}`);

    res.status(200).json({
      status: 'success',
      data: response,
    });
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createStatisticMun = async (req, res) => {
  try {
    let daily = new statisticModelMun.DailyDataMun();

    for (let i = 0; i < req.body.length; i++) {
      daily.dailyDataMun.push(req.body[i].properties);
    }

    const todayDate = () => {
      let tempDate = new Date().toISOString();
      let temp = tempDate.slice(0, 10);
      return `${temp.slice(0, 4)}${temp.slice(5, 7)}${temp.slice(8, 10)}`;
    };

    daily.date = todayDate();

    const response = await statisticModelMun.DailyDataMun.create(daily);

    console.log(`Database updated successfully at ${new Date().toISOString()}`);

    res.status(200).json({
      status: 'success',
      data: response,
    });
  } catch (err) {
    res.status(503).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStatisticByDate = async (req, res) => {
  try {
    const { date } = req.params;

    console.log(date);

    const todayDate = () => {
      let tempDate = new Date().toISOString();
      let temp = tempDate.slice(0, 10);
      return `${temp.slice(0, 4)}${temp.slice(5, 7)}${temp.slice(8, 10)}`;
    };

    const reqDate = () => {
      return `${date.slice(0, 4)}${date.slice(5, 7)}${date.slice(8, 10)}`;
    };

    if (
      parseInt(reqDate()) <= parseInt(todayDate()) &&
      parseInt(reqDate()) >= 20200910
    ) {
      console.log('Valid');

      res.status(200).json({
        status: 'success',
        data: {
          reqData: await statisticModel.DailyData.findOne({ date: reqDate() }),
        },
      });
    } else {
      throw Error(
        `Invalid date requested. Date cannot be earlier than 2020-09-08 or later than ${new Date()
          .toISOString()
          .slice(0, 10)}`
      );
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStatisticByDepartment = async (req, res) => {
  try {
    const request = await axios.get(
      `http://localhost:${process.env.PORT}/api/v1/statistics/department/${req.params.date}`
    );
    const departments = request.data.data.reqData.dailyData;

    if (!isNaN(parseInt(req.params.department))) {
      if (parseInt(req.params.department) > departments.length - 1) {
        throw Error('Department number is Invalid!');
      } else {
        res.status(200).json({
          status: 'success',
          data: departments[parseInt(req.params.department)],
        });
      }
    }

    for (let i = 0; i < departments.length; i++) {
      if (departments[i].NOMBRE_DPT === req.params.department.toUpperCase()) {
        res.status(200).json({
          status: 'success',
          data: departments[i],
        });
      } else if (i === departments.length - 1) {
        throw Error('Department not found!');
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getStatisticByDateMun = async (req, res) => {
  try {
    const { date } = req.params;

    console.log(date);

    const todayDate = () => {
      let tempDate = new Date().toISOString();
      let temp = tempDate.slice(0, 10);
      return `${temp.slice(0, 4)}${temp.slice(5, 7)}${temp.slice(8, 10)}`;
    };

    const reqDate = () => {
      return `${date.slice(0, 4)}${date.slice(5, 7)}${date.slice(8, 10)}`;
    };

    if (
      parseInt(reqDate()) <= parseInt(todayDate()) &&
      parseInt(reqDate()) >= 20200910
    ) {
      console.log('Valid');

      res.status(200).json({
        status: 'success',
        data: {
          reqData: await statisticModelMun.DailyDataMun.findOne({
            date: reqDate(),
          }),
        },
      });
    } else {
      throw Error(
        `Invalid date requested. Date cannot be earlier than 2020-09-08 or later than ${new Date()
          .toISOString()
          .slice(0, 10)}`
      );
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getStatisticByMunicipality = async (req, res) => {
  try {
    const request = await axios.get(
      `http://localhost:${process.env.PORT}/api/v1/statistics/municipality/${req.params.date}`
    );
    const municipalities = request.data.data.reqData.dailyDataMun;

    if (!isNaN(parseInt(req.params.municipality))) {
      if (parseInt(req.params.municipality) > municipalities.length - 1) {
        throw Error('Municipality number is Invalid!');
      } else {
        res.status(200).json({
          status: 'success',
          data: municipalities[parseInt(req.params.municipality)],
        });
      }
    }

    for (let i = 0; i < municipalities.length; i++) {
      if (
        municipalities[i].NOMBRE_MPIO === req.params.municipality.toUpperCase()
      ) {
        res.status(200).json({
          status: 'success',
          data: municipalities[i],
        });
      } else if (i === municipalities.length - 1) {
        throw Error('Municipality not found!');
      }
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
