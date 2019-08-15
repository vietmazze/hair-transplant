const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const secret = config.get("jwtSecret");

router.post(
  "/",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: `${email} does not exist` });
      }

      let pwHash = await bcrypt.compare(password, user.password);
      if (!pwHash) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        user: user.id
      };
      let token = await jwt.sign(
        payload,
        secret,
        { expiresIn: 300000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
