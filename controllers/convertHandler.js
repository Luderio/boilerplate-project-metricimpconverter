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
    let filteredUnits = [];

    let unit = inputUnit.filter(units => {
      if (!Number(units) && units !== ".") {
        filteredUnits.push(units);
      }
    });

    result = filteredUnits.join("");

    if (result == "l" || result == "L") {
      return result.toUpperCase();
    }else {
      return result.toLowerCase();
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    if (initUnit == "gal" || initUnit == "GAL") {
      result = "L"
    }else if (initUnit == "l" || initUnit == "L") {
      result = "gal"
    }

    if (initUnit == "lbs" || initUnit == "LBS") {
      result = "kg"
    }else if (initUnit == "kg" || initUnit == "KG") {
      result = "lbs"
    }


    if (initUnit == "mi" || initUnit == "MI") {
      result = "km"
    }else if (initUnit == "km" || initUnit == "KM") {
      result = "mi"
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    if (unit == "kg" || unit == "KG") {
      result = "kilograms";
    }else if (unit == "lbs" || unit == "LBS") {
      result = "pounds";
    }
    
    if (unit == "km" || unit == "KM") {
      result = "kilometers";
    }else if (unit == "mi" || unit == "MI") {
      result = "miles";
    }
    
    if (unit == "gal" || unit == "GAL") {
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

    if (initUnit == "gal" || initUnit == "GAL") {
      result = initNum * galToL;
    }else if (initUnit == "l" || initUnit == "L") {
      result = initNum / galToL;
    }

    if (initUnit == "lbs" || initUnit == "LBS") {
      result = initNum * lbsToKg;
    }else if (initUnit == "kg" || initUnit == "KG") {
      result = initNum / lbsToKg;
    }

    if (initUnit == "mi" || initUnit == "MI") {
      result = initNum * miToKm;
    }else if (initUnit == "km" || initUnit == "KM") {
      result = initNum / miToKm;
    }
    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
