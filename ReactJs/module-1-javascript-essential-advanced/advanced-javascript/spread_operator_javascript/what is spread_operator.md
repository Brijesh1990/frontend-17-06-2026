# Spread Operator in JavaScript

The spread operator (`...`) expands an iterable or object so that its values or properties can be used individually.

## Arrays

```javascript
const numbers = [1, 2, 3];
const allNumbers = [...numbers, 4, 5];

console.log(allNumbers); // [1, 2, 3, 4, 5]
```

It can copy arrays and combine multiple arrays:

```javascript
const first = [1, 2];
const second = [3, 4];

const copy = [...first];
const combined = [...first, ...second];
```

It can also pass array values as separate function arguments:

```javascript
const numbers = [10, 20, 30];

console.log(Math.max(...numbers)); // 30
```

## Objects

The spread operator copies or combines object properties:

```javascript
const user = { name: "Brijesh", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser);
// { name: "Brijesh", age: 26 }
```

Properties in later objects override matching properties from earlier objects.

## Strings

The spread operator can expand a string into individual characters:

```javascript
const letters = [..."JavaScript"];

console.log(letters);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
```

Spread creates shallow copies. It does not deep-copy nested objects or arrays.