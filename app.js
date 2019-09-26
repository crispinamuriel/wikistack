const morgan = require('morgan');
const express = require('express');
const bodyParser = require("body-parser");
const layout = require('./views/layout');
const { db } = require("./models");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res, next) => {
  res.send(layout(''));
});
const PORT = 3000;

const init = async() => {
  await models.User.sync()
  await models.Page.sync()


  app.listen(PORT, () => {
 console.log(`App listening in port ${PORT}`);
});
}


