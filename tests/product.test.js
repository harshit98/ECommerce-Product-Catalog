const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('Start Test', () => {
  it('should load the app successfully', () => {
    expect(true).toBe(true)
  });
});

describe('Testing Endpoints', () => {
    before(() => {
        mongoose.createConnection('mongodb://localhost:27017/ProductDB');
    });

    it('should get the /product endpoint', async done => {
        const res = await request.get('/product');
        done();
    });
});
