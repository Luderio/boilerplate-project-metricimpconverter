'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((request, response) => {
    let input = request.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (initUnit === "invalid unit") {
      response.json("invalid unit");
    }

    if (initNum === "invalid number") {
      response.json("invalid number");
    }

    if (initUnit === "invalid unit" && initNum === "invalid number") {
      response.json("invalid number and unit");
    }

    response.json(toString)
  });

  

  

};
