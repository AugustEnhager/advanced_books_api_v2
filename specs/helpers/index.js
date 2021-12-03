'use strict';
const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
const factory = factoryGirl.factory
const chai = require('chai')
const expect = chai.expect
const sinonChai = require('sinon-chai')
const app = require('../../app')
chai.use(sinonChai)

factory.setAdapter(adapter)

const Models = require('../../models')

factory.cleanUp()
factory.factories = []

require('../factories')(factory, Models)
const supertest = require('supertest')

let server
const serverConfig = (done) => {
  server = app.listen(done)
  return supertest.agent(server)
}

before(done => {
  Models.sequelize.sync({ force: true })
    .finally(() => {
      done()
    })
})

after(done => {
  if (server) {
    server.close(done)
  }
});

const pending = () => {
  console.warn('Pending - waiting for you to write a test case...')
}

module.exports = {
  expect,
  factory,
  Models,
  serverConfig,
  pending
}