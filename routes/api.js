'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((request, response) => {
    let input = request.query.input;
    let initNum = convertHandler.getNum(input);
    console.log(initNum);

  });

};
