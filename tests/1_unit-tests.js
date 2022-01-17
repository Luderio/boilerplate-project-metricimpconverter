const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    //Tests for valid inputs.
    suite('Function convertHandler.getNum(input)', function() {
        //for whole number input
        test('Whole Number Input', function(done) {
            let input = '32L';
            assert.equal(convertHandler.getNum(input), 32, 'Error: should correctly read a whole number input.');
            done();
        });

        //for decimal input
        test('Decimal Number Input', function(done) {
            let input = '32.5L';
            assert.equal(convertHandler.getNum(input), 32.5, 'Error: should correctly read a decimal number input');
            done();
        });

        //for fractional input
        test('Fractional Input', function(done) {
            let input = '0.5L';
            assert.equal(convertHandler.getNum(input), 1/2, 'Error: should correctly read a fractional input.');
            done();
        });

        //for fractional input with decimal
        test('Fractional Input with Decimal', function(done) {
            let input = '0.4166666666666667L';
            assert.equal(convertHandler.getNum(input), 2.5/6, 'Error: should correctly read a fractional input with a decimal.');
            done();
        });

        //for double fraction error
        test('Double Fraction Error', function(done) {
            let input = '3/2/4kg';//change the logic later
            assert.equal(convertHandler.getNum(input), 'invalid number', 'Error: should correctly return an error on a double-fraction (i.e. 3/2/3)');//change this later
            done();
        });

        //for default input of 1
        test('Default Input of 1', function(done) {
            let input = '1L';//change the logic later
            assert.equal(convertHandler.getNum(input), 1, 'Error: input should correctly default to a numerical input of 1 when no numerical input is provided.');
            done();
        });
    });
    
    //Tests for the valid units.
    suite('Function convertHandler.getUnit(input)', function() {

        test('For Each Valid Unit Inputs', function(done) {
            let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
            input.forEach((unit) => {
                assert.equal(convertHandler.getUnit(32 + unit), unit, 'Error: Invalid Unit');
            });
            done();
        });

        test('Unknown Unit Input', function(done) {
            let input = '32g';
            assert.equal(convertHandler.getUnit(input), 'invalid unit', 'Error: Invalid Unit');
            done();
        });
    });
    
    //Tests for unit conversion.
    suite('Function convertHandler.convert(num, unit)', function() {
        //Gallons to Liters
        test('Gal to L', function(done) {
            let input = [5, 'gal'];
            let expected = 18.9271;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
        //Liters to Gallons
        test('L to Gal', function(done) {
            let input = [5, 'l'];
            let expected = 1.32086;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
        //Miles to Kilometers
        test('Mi to Km', function(done) {
            let input = [5, 'mi'];
            let expected = 8.04672;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
        //Kilometers to Miles
        test('Km to Mi', function(done) {
            let input = [5, 'km'];
            let expected = 3.10686;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
        //Pounds to Kilograms
        test('Lbs to Kg', function(done) {
            let input = [5, 'lbs'];
            let expected = 2.26796;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
        //Kilograms to Pounds
        test('Kg to Lbs', function(done) {
            let input = [5, 'kg'];
            let expected = 11.0231;
            assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1, 'Error: conversion not correct');
            done();
        });
    });

    //Tests for ReturnUnits
    suite('Function convertHandler.getReturnUnit(initUnit)', function() {
        test('For Each Valid Unit Inputs', function(done) {
            let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            let expect = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];

            input.forEach((units, i) => {
                assert.equal(convertHandler.getReturnUnit(units), expect[i], 'Error: invalid returned Units');
            });
            done();
        });
    });

});