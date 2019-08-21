const express = require('express');
const router = express.Router();
const Youtubers = require('../models/Youtubers');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const secret = config.get('jwtSecret');

router.get('/', async (req, res) => {
  const contact = await Youtubers.find({});
  res.json(contact);
});

router.post('/', async (req, res) => {
  const {
    channelID,
    name,
    description,
    viewCount,
    subscriberCount,
    videoCount,
    image
  } = req.body;
  try {
    const youtuber = new Youtubers({
      channelID,
      name,
      description,
      viewCount,
      subscriberCount,
      videoCount,
      image
    });
    await youtuber.save();
    res.status(200).json({ msg: youtuber });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
