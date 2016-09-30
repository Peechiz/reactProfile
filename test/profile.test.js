'use strict'
const expect = require('chai').expect;
const server = require('../server')
const request = require('supertest')(server);

describe('tests are ready', ()=>{
  it('checks to see if tests are working', ()=>{
    expect(1).to.equal(1)
  })
  it('checks to see if env set correctly', ()=>{
    expect(process.env.DB_CONFIG).to.equal('test')
  })
})

describe('GET api/users', ()=>{
  it('should get all users', (done)=>{
    request.get('/api/users')
    .expect(200)
    .end((err,res) => {
      expect(res.body.length).to.equal(1)
      done();
    })
  })
  it('should get a single user', (done)=>{
    request.get('/api/users/1')
    .expect(200)
    .end((err,res)=>{
      expect(res.body.id).to.equal(1)
      done();
    })
  })
})
