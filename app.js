const express = require('express');
const cors = require('cors');
const testRouter = require('./routes/testRoutes');
const statisticRouter = require('./routes/statisticRoutes');
const geometryRouter = require('./routes/geometryRouter');
const scheduleRouter = require('./routes/scheduleRouter');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));

// Routers
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/api/v1/statistics', statisticRouter);

app.use('/api/v1/geometry', geometryRouter);

app.use('/api/v1/schedule', scheduleRouter);

app.use('/api/test', testRouter);

// App Export
module.exports = app;
