#!/usr/bin/env node
const scheduleController = require('./../controllers/scheduleController');

// scheduler function
scheduleController.dailyUpdateDep();
scheduleController.dailyUpdateMun();
