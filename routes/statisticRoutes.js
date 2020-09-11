const express = require('express');
const statisticController = require('./../controllers/statisticController');

const router = express.Router();

router.route('/department').post(statisticController.createStatistic);
router.route('/municipality').post(statisticController.createStatisticMun);

router.route('/department/:date').get(statisticController.getStatisticByDate);
router
  .route('/department/:date/:department')
  .get(statisticController.getStatisticByDepartment);
router
  .route('/municipality/:date')
  .get(statisticController.getStatisticByDateMun);
router
  .route('/municipality/:date/:municipality')
  .get(statisticController.getStatisticByMunicipality);

module.exports = router;
