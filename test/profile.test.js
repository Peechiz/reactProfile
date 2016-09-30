'use strict'
const expect = require('chai').expect;
const server = require('../server')
const request = require('supertest')(server);

describe('tests are ready', ()=>{
  it('checks to see if tests are working', ()=>{
    expect(1).to.equal(1)
  })
})

describe('GET api/users', ()=>{
  it('should get all users', (done)=>{
    request.get('/api/users')
    .expect(200)
    .end((err,res) => {
      console.log(res.body);
      expect(res.body).to.deep.equal(5)
      done();
    })
  })
})
