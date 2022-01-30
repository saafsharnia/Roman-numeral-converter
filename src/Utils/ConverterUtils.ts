const map: { [key: string]: number } = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
}


/**
 * [Convert Roman string to number]
 * @param  {string} str [A Roman numeral string]
 * @return {{res: number, validator: boolean}}     [An object which contains the validator and result]
  */
export const convertRomanToInteger = (str: string) => {
  let res = 0;
  var validator = true;
  // Improvement: Add a validation check (a regex pattern), so that not allowing more than 3 same characters in sequence!
  // ex: CVIIII is invalid!! But XXXIX is valid (it's 39), VV is invalid!

  const stringArray: Array<string> = str.toString().split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "I" && stringArray[i + 1] === "V") {
      res += 4;
      i++;
    } else if (stringArray[i] === "I" && stringArray[i + 1] === "X") {
      res += 9;
      i++;
    } else if (stringArray[i] === "X" && stringArray[i + 1] === "L") {
      res += 40;
      i++;
    } else if (stringArray[i] === "X" && stringArray[i + 1] === "C") {
      res += 90;
      i++;
    } else if (stringArray[i] === "C" && stringArray[i + 1] === "D") {
      res += 400;
      i++;
    } else if (stringArray[i] === "C" && stringArray[i + 1] === "M") {
      res += 900;
      i++;
    } else if ((i + 1 < stringArray.length && map[stringArray[i]] < map[stringArray[i + 1]]) ||
      !map[stringArray[i]]) {
      // Meas the string is invalid
      validator = false;
    }
    else {
      res += map[stringArray[i]];
    }
  }
  return { res, validator };
}


/**
 * [Check number validation]
 * @param  {number} num [A number]
 * @return {boolean}    [The validation flag]
  */
export const numberValidator = (num: number) => {
  return (0 < num && num < 4000)
}


/**
 * [Convert An integer number to Roman]
 * @param  {number} num [A number]
 * @return {string}     [A Roman numeral string]
  */
export const convertIntegerToRoman = (num: number) => {
  let result = '';

  for (let key in map) {
    let timeOfRepeat = Math.floor(num / map[key]);
    while (timeOfRepeat--) {
      result += key;
    }
    num %= map[key];
    if (num === 0) {
      break;
    }
  }

  return result;
}