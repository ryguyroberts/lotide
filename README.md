# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rrober01/lotide`

**Require it:**

`const _ = require('@rrober01/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `Tail(...)`: Returns values in array other than the first index value 0
* `Middle(...)`: Returns the middle value of an array 
* `head(...)`: Returns only the first element in an array at index 0
* `CountLetters(...)`: Count how many times a letter occurs in a string
* `CountOnly(...)`: Counts only the defined keys in an object
* `findKey(...)`: Finds the name of a key in an object based off a value provided in a callback
* `findKeyByValue(...)`: Finds the name of a key in an object based off a value provided
* `flatten(...)`: Turns a array with nested arrays into a single level array
* `takeUntil(...)`: Input values in an array to a new array, until it reaches a provided value
* `without(...)`: Input values into a new array, taking an argument for values to leave out of the new array
* `assertArraysEqual(...)`: Asserts two arrays are equal
* `assertEqual(...)`: Assert two values are equal
* `assertObjectsEqual(...)`: Asserts two objects are equal
* `eqArrays(...)`: Compares two arrays to each other
* `eqObjects(...)`: Compares two objects to each other
