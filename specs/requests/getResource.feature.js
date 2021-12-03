const { factory, expect, serverConfig } = require('../helpers')

let request, response

before(done => {
  request = serverConfig(done)
});

beforeEach(async () => {
  // create your factories here
})

afterEach(async () => {
  await factory.cleanUp()
})

describe('Example of a request spec', () => {
  describe('GET /api/resource', () => {

    beforeEach(async () => {
      response = await request.get('/api/resource')
    });

    it('is expected to respond with status 200', () => {
      expect(response.status).to.equal(200)
    });

    it('is expected to respond with a list of 1 resource', () => {
      expect(response.body['resources'].length).to.equal(1)
    });

    describe('resource properties', () => {
      it('is expected to include :message & :nextStep', () => {
        const expectedJson = [{
          "message": "Your API is working",
          "nextStep": "Go on and create some magic!"
        }]
        expect(response.body['resources'])
          .to.deep.equal(expectedJson)
      });
    });
  });
});