#!/usr/bin/env node
const scheduleController = require('./../controllers/scheduleController');

//scheduler functions
scheduleController.dailyUpdateDep();
scheduleController.dailyUpdateMun();
