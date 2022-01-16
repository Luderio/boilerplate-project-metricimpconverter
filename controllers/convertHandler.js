function ConvertHandler() {
  
  //to get the number on the input without the unit.
  this.getNum = function(input) {
    let numberRegex = /[\d]|[\d.\d$]|[\d/\d$]/g;
    //let invalidNumberRegex = /[\d.\d{2,}$]|[\d/\d{2,}$]/gi;
    let result;

    if (input.match(numberRegex)) {
      result = input.match(numberRegex);
    }else {
      result = [];
      result.push("invalid number");
    }

    

    

    return result.join("");
  };
  
  this.getUnit = function(input) {
    let unitRegex = /[a-z]+|[A-Z]+/gi;
     let result;

     result = input.match(unitRegex);

     let validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];

    if (!validUnits.includes(result.join(""))) {
      result = [];
      result.push("invalid unit");
    }

     return result.join("");
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
      result = (initNum * galToL).toFixed(5);
    }else if (initUnit == "l" || initUnit == "L") {
      result = (initNum / galToL).toFixed(5);
    }

    if (initUnit == "lbs" || initUnit == "LBS") {
      result = (initNum * lbsToKg).toFixed(5);
    }else if (initUnit == "kg" || initUnit == "KG") {
      result = (initNum / lbsToKg).toFixed(5);
    }

    if (initUnit == "mi" || initUnit == "MI") {
      result = (initNum * miToKm).toFixed(5);
    }else if (initUnit == "km" || initUnit == "KM") {
      result = (initNum / miToKm).toFixed(5);
    }
    
    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    //logic for proper initUnit case (lowercase/uppercase)
    if (initUnit === "l" || initUnit === "L") {
      initUnit = initUnit.toUpperCase();
    }else {
      initUnit = initUnit.toLowerCase();
    }

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
