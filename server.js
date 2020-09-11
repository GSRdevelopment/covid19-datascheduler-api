const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: './config.env',
});

const DB = process.env.DATABASE;

// Connect to Database

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DATABASE CONNECTED SUCCESSFULLY');
  });

// Server Start

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
