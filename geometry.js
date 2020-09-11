const { Console } = require('console');
const fs = require('fs');
const axios = request('axios');

const write = async () => {
  let request = await axios.get(
    'https://opendata.arcgis.com/datasets/53beb24d21f146c38a42db63c92e3460_0.geojson'
  );

  let data = request.data.features;
  let requestMun = await axios.get(
    'https://covid19-datascheduler-api.herokuapp.com/api/v1/statistics/municipality/2020-09-10'
  );
  let municipality = requestMun.data.reqData.dailyDataMun;

  for (let i = 0; i < data.length; i++) {
    delete data[i].properties;
    data[i].features = {
      ...data.features,
      index: i,
      municipality: municipality[i].DPTO_CNMBR,
    };
  }

  await fs.writeFile('./geometry.js', JSON.stringify(data.features), () => {
    console.log('geometry.js file created!');
  });
};

write();
