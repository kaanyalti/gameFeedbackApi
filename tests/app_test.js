const request = require('supertest');
const expect = require('expect.js');
const app = require('../src/app');

let server;
describe('Test the ping counter path', () => {
  beforeEach(async () => {
    server = await app.start();
  });
  it('should respond to the GET method and increment visit number', async () => {
    const r = request(server);
    await r
      .get('/ping')
      .then((res) => {
        expect(res.statusCode).to.be(200);
        expect(res.body.visit).to.be(1);
      });
    await r
      .get('/ping')
      .then((res) => {
        expect(res.statusCode).to.be(200);
        expect(res.body.visit).to.be(2);
      });
  });
});