process.env.NODE_ENV = 'test';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../src/app';

chai.use(chaiHttp);

describe('Ingredients API tests', () => {
    it('/GET /ingredients valid request should return status code 200', async function (done) {
        chai.request(app)
            .get('/v1/ingredients')
            .then(function (res) {
                expect(res).to.have.status(200);
            });
        done();
    });
});
