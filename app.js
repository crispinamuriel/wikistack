const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const layout = require('./views/layout');
const models = require('./models');
const wikiRoute = require('./routes/wiki');
const userRoute = require("./routes/user");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/wiki', wikiRoute);
app.use('/user', userRoute);

app.get('/', (req, res, next) => {
  res.send(layout(''));
});

const PORT = 3000;

const init = async() => {
  await models.db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();

