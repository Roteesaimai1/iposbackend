const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Menu = require('./api/models/menuModel');
const routes = require('./api/routes/menuRoutes');

mongoose.connect(
  'mongodb://127.0.0.1:27017/iposdb',
  { useNewUrlParser: true }
);
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);