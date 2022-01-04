const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    suite('Routing Tests', function() {

        suite('GET /api/convert => conversion object', function() {

            test('Convert 15L (valid input)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '15L'})
                .end(function(err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, 15);
                    assert.equal(res.body.initUnit, 'L');
                    assert.approximately(res.body.returnNum, 3.96258, 0.1);
                    assert.equal(res.body.returnUnit, 'gal');
                    done();
                });
            });
    
            test('Convert 32g (invalid input unit)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '32g'})
                .end(function(err, res) {
                    assert.equal(res.body, 'invalid unit');
                    done();
                });
            });
        });
    });

});
