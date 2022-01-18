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

            test('Convert an invalid number such as 3/7.2/4kg (double fraction error)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '3/2/4kg'})
                .end(function(err, res) {
                    assert.equal(res.body, 'invalid number');
                    done();
                });
            });

            test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: '3/7.2/4kilomegagram'})
                .end(function(err, res) {
                    assert.equal(res.body, 'invalid number and unit');
                    done();
                });
            });

            test('Convert with no number such as kg (default to 1)', function(done) {
                chai.request(server)
                .get('/api/convert')
                .query({input: 'kg'})
                .end(function(err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.initNum, 1);
                    assert.equal(res.body.initUnit, 'kg');
                    assert.approximately(res.body.returnNum, 2.20462, 0.1);
                    assert.equal(res.body.returnUnit, 'lbs');
                    done();
                });
            });




        });
    });

});
