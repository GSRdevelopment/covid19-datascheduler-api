#!/usr/bin/env node
const scheduleController = require('./../controllers/scheduleController');

// scheduler function
exports.update = (req, res) => {
  scheduleController.dailyUpdateDep();
  scheduleController.dailyUpdateMun();

  res.status(200).json({
    message: 'done!',
  });
};

scheduleController.dailyUpdateDep();
scheduleController.dailyUpdateMun();
