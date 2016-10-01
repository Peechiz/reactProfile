const express = require('express');
const router = express.Router();

const m = require('../models/index') // models
const db = m.db;

router.get('/users', (req,res)=>{
  m.User.findAll().then(users => {
    res.send(users.map(x => x.toJSON()))
  }).catch( err => {
    res.send(err)
  })
})

router.get('/users/:id', (req,res) => {
  m.User.findAll({
    where: {id: req.params.id}
  }).then(users => {
    res.send(users.map(x => x.toJSON())[0])
  }).catch( err => {
    res.send(err)
  })
})

router.put('/users/:id', (req,res) => {
  m.User.upsert({
    id: req.params.id,
    name: req.body.name,
    img: req.body.img,
    info: req.body.info
  }).then( result => {
    res.send(result)
  })
})

module.exports = router;
