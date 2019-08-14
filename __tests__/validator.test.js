'use strict';

const Validator = require('../lib/validator.js');

describe('Validator', () => {
  
})


let myValidator = new Validator("Fred", "Sample", {
  "type": "wavy",
  "color": "brown"
}, ["pizza","cupcakes","salmon"], true, 3);

  it('isString() determines if the input is a string', () => {

    expect(myValidator.isString(myValidator.firstName)).toEqual(true);
  });

  it('isObject() determines if the input is an object', () => {
    expect(myValidator.isObject(myValidator.hair)).toEqual(true);
  });

  it('isArray() determines if the input is an array', () => {
    expect(myValidator.isArray(myValidator.favoriteFoods, 'string')).toEqual(true);
  });

  it('isBoolean() determines if the input is a boolean', () => {
    expect(myValidator.isBoolean(myValidator.married)).toEqual(true);
  });

  it('isNumber() determines if the input is a number', () => {
    expect(myValidator.isNumber(myValidator.kids)).toEqual(true);
  });

  // it('isFunction() determines if the input is a function', () => {

  // });

  it('isTruthy() determines if the input is truthy', () => {

  });

  // it('isValid() determines if the input is a valid object', () => {

  // });



