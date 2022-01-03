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

    if (initUnit == "km" || initUnit == "KM") {
      result = "mi";
    }else if (initUnit == "mi" || initUnit == "MI") {
      result = "km";
    }else if (initUnit == "gal" || initUnit == "GAL") {
      result = "L";
    }else if (initUnit == "l" || initUnit == "L") {
      result = "gal";
    }else if (initUnit == "lbs" || initUnit == "LBS") {
      result = "kg";
    }else if (initUnit == "kg" || initUnit == "KG") {
      result = "lbs";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    if (unit == "kg" || unit == "KG") {
      result = "kilograms";
    }else if (unit == "lbs" || unit == "LBS") {
      result = "pounds";
    }else if (unit == "km" || unit == "KM") {
      result = "kilometers";
    }else if (unit == "mi" || unit == "MI") {
      result = "miles";
    }else if (unit == "gal" || unit == "GAL") {
      result = "gallons";
    }else if (unit == "l" || unit == "L") {
      result = "liters";
    }
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
    let result = {
      "initNum": initNum,
      "initUnit": initUnit,
      "returnNum": returnNum,
      "returnUnit": returnUnit,
      "string": `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
