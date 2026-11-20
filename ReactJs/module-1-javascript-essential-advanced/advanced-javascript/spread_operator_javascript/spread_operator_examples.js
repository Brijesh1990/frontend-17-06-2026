// spread operator merge more than two array
// spread operator denoted by ...
// spread operator copy element one array to another array


// emp1=Array("jay","rajesh","vijay");
// emp2=Array("drij","rajesh","ayaz");
// console.log(...emp1,...emp2);

// array as literals 
// var numbers=[1,2,3,4]
// var res=[...numbers,5,6];
// console.log(res);

// combine or merge in one array 
// const first = [1, 2];
// const second = [3, 4];
// const res=[...first, ...second];
// console.log(res);


// spread operator copy array element and implements fun function also
const numbers=[20,40,60,10,90]
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log(Math.pow(...numbers,2));