const express = require("express");
const router = express.Router();
const auth = require("./../middleware/auth");
const User = require("../models/User");

router.get('/list', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      res.send({shoppinglist: user.shoppinglist})
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  router.post('/add', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      user.shoppinglist.push(req.body.item)
      res.send({shoppinglist: user.shoppinglist})
      await user.save()
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  router.delete('/delete', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const index = user.shoppinglist.indexOf(item);
        if (index > -1) {
          user.shoppinglist.splice(index);
        }
        await user.save();
        res.send(user.shoppinglist);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

  module.exports = router;