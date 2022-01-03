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
      if (!Number(units) && units !== ".") {
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

    if (initUnit == "km" || initUnit == "KM") {
      result = initNum / miToKm;
    }else if (initUnit == "mi" || initUnit == "MI") {
      result = initNum * miToKm;
    }else if (initUnit == "gal" || initUnit == "GAL") {
      result = initNum * galToL;
    }else if (initUnit == "l" || initUnit == "L") {
      result = initNum / galToL;
    }else if (initUnit == "lbs" || initUnit == "LBS") {
      result = initNum * lbsToKg;
    }else if (initUnit == "kg" || initUnit == "KG") {
      result = initNum / lbsToKg;
    }
    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
