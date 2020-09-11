const express = require('express');
const geometryController = require('./../controllers/geometryController');

const router = express.Router();

router.route('/d/:index').get(geometryController.getGeometryByDepartmentIndex);
router
  .route('/m/:index')
  .get(geometryController.getGeometryByMunicipalityIndex);
router
  .route('/md/:department')
  .get(geometryController.getMunicipalityGeometryByDepartment);

module.exports = router;
