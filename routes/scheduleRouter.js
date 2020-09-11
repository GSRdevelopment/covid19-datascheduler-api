const express = require('express');
const schedule = require('./../schedule/schedule');

const router = express.Router();

router.route('/').get(schedule.update);
