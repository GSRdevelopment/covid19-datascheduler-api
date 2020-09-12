#!/usr/bin/env node
const _ = require('lodash');
const axios = require('axios');

exports.dailyUpdateDep = async () => {
  try {
    const request = await axios.get(
      'https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    );

    let data = request.data.features;

    for (let i = 0; i < data.length; i++) {
      data[i] = {
        ..._.omit(data[i], 'geometry').attributes,
        createdOn: new Date().toISOString(),
        index: i,
      };
    }

    await axios.post(
      'https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/department',
      data
    );
  } catch (err) {
    console.log('error wisth POST request!');
  }
};

exports.dailyUpdateMun = async () => {
  try {
    let request = await axios.get(
      'https://covid19-datacleaner.herokuapp.com/municipalities/properties'
    );

    for (let i = 0; i < request.data.data.length; i++) {
      request.data.data[i].properties = {
        ...request.data.data[i].properties,
        createdOn: new Date().toISOString(),
        index: i,
      };
    }

    await axios.post(
      'https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/municipality',
      request.data.data
    );
  } catch (err) {
    console.log('error with POST request!');
  }
};
