function ConvertHandler() {
  
  //to get the number on the input without the unit.
  this.getNum = function(input) {
    let inputNumber = input.split("");
    let result = [];

    let number = inputNumber.filter(num => {
      if (num == Number(num) || num == ".") {
        result.push(num);
      }
    });
    
    return result.join("");
  };
  
  this.getUnit = function(input) {
    let inputUnit = input.split("");
    let result = [];

    let unit = inputUnit.filter(units => {
      if (units !== Number(units) || units !== ".") {
        result.push(units);
      }
    });
    
    return result.join("");
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
