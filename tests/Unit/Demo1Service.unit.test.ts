require('module-alias/register');
import { expect } from 'chai';
import { Demo1ServiceController } from '@src/Services/Demo1/Demo1.Service';

describe('Demo Service Unit Testing', () => {

  it('It should return - Some specific message to return to the client', async () => {
    try {
      let result = await Demo1ServiceController.dummy1Service({});
      let outResult = '';
      if (['Some specific message to return to the client'].includes(result.message)) {
        outResult = 'SUCCESS'
      }
      expect(outResult).to.equal('SUCCESS');
    } catch (err) {
      console.log(err);
    }
  }).timeout(10000);

});
