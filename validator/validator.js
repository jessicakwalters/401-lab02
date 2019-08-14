'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) { 
    return typeof input === 'object';
  }

  isArray(input, valueType) { 
    let flag = true;
    if (typeof input !== 'object'){
      flag = false;
    }
    for (let i = 0; i < input.length; i++){
      if (typeof input[i] !== 'valueType'){
        flag = false;
      }
    }
    return flag;
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'funtion';
  }

  isTruthy(input) {
    if (input){
      return true;
    } else {
      return false;
    }
  }

  // Vinicio - checks an object against a schema
  // isValid(data, schema)
  // isValidObject in my demo code
  isValid(data, schema) {
    
  }
}

module.exports = Validator;
