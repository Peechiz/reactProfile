const express = require('express');
const router = express.Router();

const m = require('../models/index') // models
const db = m.db;

router.get('/users', (req,res)=>{
  m.User.findAll().then(users => {
    res.send(users.map(x => x.toJSON()))
  })
})

module.exports = router;
