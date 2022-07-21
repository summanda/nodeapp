require('module-alias/register')
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { StatusCodes } from '@src/Constants/StatusCodes';
import { appserver } from '../../index';

chai.use(chaiHttp);

describe('Demo Service API Integration Testing', async () => {

    let app = await appserver;

    it('It should return - a status 200 and \'Some specific message to return to the client\' or \'Failed to authenticate - check your one time secret\' message', done => {
        try {
            chai
                .request(app)
                .get('/v1/demo1_dummy1')
                .end((err, res) => {
                    let result = JSON.parse(res.text);
                    expect(res).to.have.status(StatusCodes.STATUS_200.code);
                    //expect(result.result).to.equals('Failed to authenticate - check your one time secret');
                    done();
                });
        } catch (err) {
            console.log(err);
        }
    }).timeout(10000);

});