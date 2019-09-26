const express = require("express");
const router = express.Router();
const addAPage = require('../views/addPage');
const { page } = require('../models');

router.get("/", (req, res, next) => {
  console.log(router);
  res.status(404).send('Error');
});

router.post('/', (req, res, next) => {
  res.json(req.body);
  console.log(req)
  res.send('go to post /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addAPage());
});

module.exports = router;
