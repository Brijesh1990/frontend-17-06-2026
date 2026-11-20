# # JavaScript Error: What It Is and How to Find It

A JavaScript error is a problem in your code that stops the program from running correctly or makes it behave unexpectedly.

JavaScript errors happen when:

- the syntax is wrong
- a variable or function is not defined
- the wrong type of value is used
- an operation is not allowed
- a value is outside the valid range
- an API or user input returns unexpected data

## Why errors happen in JavaScript

JavaScript is a loosely typed language, so many errors happen at runtime. This means the code might look valid, but it fails while executing.

Example:

```js
console.log("Hello World");
console.log(userName);
```

This will throw a `ReferenceError` because `userName` is not defined.

## Common types of JavaScript errors

### 1. SyntaxError
This happens when the code is written incorrectly.

Example:

```js
if (true) {
  console.log("Hello");
```

This is invalid because the closing `}` is missing.

### 2. ReferenceError
This happens when you use a variable, function, or object that is not defined.

Example:

```js
console.log(name);
```

If `name` was never declared, JavaScript throws a `ReferenceError`.

### 3. TypeError
This happens when an operation is used on the wrong type of value.

Example:

```js
const num = 5;
num.toUpperCase();
```

A number does not have a `toUpperCase()` method, so TypeError occurs.

### 4. RangeError
This happens when a value is outside the allowed range.

Example:

```js
const arr = new Array(-1);
```

Array length cannot be negative, so a `RangeError` is thrown.

### 5. URIError
This happens when a URL-related function receives an invalid URI.

Example:

```js
decodeURIComponent("%" );
```

This is invalid encoding, so JavaScript throws `URIError`.

### 6. EvalError
This is related to `eval()`, but it is mostly obsolete in modern JavaScript.

Example:

```js
eval("alert('Hello')");
```

This was historically used with `eval()`, but modern code rarely triggers `EvalError` directly.

### 7. AggregateError
This happens when multiple errors are combined into one error.

Example:

```js
Promise.any([
  Promise.reject(new Error("A")),
  Promise.reject(new Error("B"))
]).catch(err => {
  console.log(err);
});
```

`AggregateError` is often used when several tasks fail together.

### 8. InternalError
This happens when JavaScript engine fails internally due to a resource or implementation issue.

Example:

```js
function recursiveLoop() {
  recursiveLoop();
}
```

This may eventually cause a stack overflow or internal error depending on the environment.

### 9. Custom Error
You can create your own custom error using `Error`.

Example:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input");
```

This is useful in real applications when validating user input.

## How to find errors in JavaScript

### 1. Read the error message
The browser or Node.js usually tells you:

- the error name
- the message
- the file name
- the line number
- the stack trace

This is the first and most important clue.

### 2. Check the browser console
In Chrome/Edge/Firefox:

- open Developer Tools
- go to the Console tab
- read the full error details
- click the file and line number to jump to the code

### 3. Use `console.log()`
This is the simplest debugging method.

```js
const x = 10;
console.log("Before calculation", x);
const total = x + 5;
console.log("After calculation", total);
```

This helps track values step by step.

### 4. Use `try...catch`
This catches runtime errors before the script crashes.

```js
try {
  const result = JSON.parse('{bad json');
} catch (error) {
  console.error("Parsing failed:", error.message);
}
```

### 5. Use the `debugger` keyword
This pauses code execution in the browser DevTools.

```js
function calculate(a, b) {
  debugger;
  return a + b;
}
```

### 6. Use breakpoints in DevTools
You can set breakpoints to inspect variables step by step.

### 7. Use linters
Tools like ESLint catch many mistakes before runtime.

Example issues found by linters:

- undefined variables
- missing semicolons (optional)
- unreachable code
- unused variables

### 8. Run tests
Use unit testing frameworks like Jest or Mocha to detect hidden logic errors.

## Best practices to avoid JavaScript errors

- write clean and valid syntax
- declare variables before using them
- check values before calling methods
- validate user inputs
- use `try...catch` for risky code
- use strict mode (`"use strict";`)
- test code with browser console and debugging tools

## Summary

A JavaScript error is a failure in your code that occurs while running or while parsing the script. The most common types are:

- `SyntaxError`
- `ReferenceError`
- `TypeError`
- `RangeError`
- `URIError`
- `EvalError`
- `AggregateError`
- `InternalError`

To find errors, use:

- browser console
- stack traces
- `console.log()`
- `try...catch`
- `debugger`
- testing tools and linters

In short, JavaScript errors are normal in development, and learning how to read and fix them is a key part of becoming a good developer.