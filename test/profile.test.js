'use strict'
const expect = require('chai').expect;
const server = require('../server')
const request = require('supertest')(server);

describe('tests are ready', ()=>{
  it('checks to see if tests are working', ()=>{
    expect(1).to.equal(1)
  })
})
