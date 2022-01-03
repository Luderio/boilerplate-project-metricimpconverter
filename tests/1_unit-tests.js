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
            assert.equal(convertHandler.getNum(input), 32, 'Error: input must be a number');
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
    });
    
    //Tests for unit conversion.
    suite('Function convertHandler.convert(num, unit)', function() {
        //Gallons to Liters
        test('Gal to L', function(done) {
            let input = [5, 'gal'];
            let expected = 18.92705;
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

        });
        //Kilometers to Miles
        test('Km to Mi', function(done) {

        });
        //Pounds to Kilograms
        test('Lbs to Kl', function(done) {

        });
        //Kilograms to Pounds
        test('Kl to Lbs', function(done) {

        });
    });

    //Tests for ReturnUnits
    suite('Function convertHandler.getReturnUnit(initUnit)', function() {
        test('For Each Valid Unit Inputs', function(done) {
            let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
            let expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];

            input.forEach((units, i) => {
                assert.equal(convertHandler.getReturnUnit(unit), expect[i]);
            });
            done();
        });
    });

});