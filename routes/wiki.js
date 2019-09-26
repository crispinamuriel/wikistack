const express = require("express");
const router = express.Router();
const addAPage = require('../views/addPage');
const { Page } = require('../models');
const { db } = require("../models");

router.get("/", (req, res, next) => {

  res.status(404).send('Error');
});

router.post('/', async (req, res, next) => {

    // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  console.log(db.models.page);


  const page = new Page({
    title: req.body.title[0],
    content: req.body.pageContent
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addAPage());
});

module.exports = router;
