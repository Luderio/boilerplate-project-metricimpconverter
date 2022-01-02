const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Input Validation', function() {
        //for whole number input
        test('Whole Number Input', function() {

            assert.isNumber(convertHandler.getNum, 'Error: input must be a number');
        });
    });
});