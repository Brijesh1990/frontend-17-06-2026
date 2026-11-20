// array functions
// array provides inbuilt function
// var students=new Array("drij","mahipal","dev","ayaz");
// console.log(students);
// console.log(students[1]);
// console.log(typeof(students));

// array function list

// push() : push is used to push or insert new array elements at last positions
// var res=students.push("jayesh");
// console.log(res);
// console.log(students)

// pop(): pop will be removed last elements from array 
// var res=students.pop();
// console.log(res);
// console.log(students);

// list of array function 

// var res=students.forEach()
// var res=students.filter()
// var res=students.length()
// var res=students.map()
// var res=students.reverse()
// var res=students.concat()
// var res=students.entries()
// var res=students.includes()
// var res=students.fill()
// var res=students.findIndex()
// var res=students.slice()
// var res=students.findLast()
// var res=students.keys()
// var res=students.values()
// var res=students.join()
// var res=students.shift()
// var res=students.sort()

// emp1=Array("jay","rajesh","vijay");
// emp2=Array("drij","rajesh","ayaz");
// console.log(emp1.concat(emp2));

// sort() : sort array via its values in ascending order
// var emp=Array("jay","rajesh","vijay","amish","kumar");
// var res=emp.sort();
// console.log(res);


// foreach() : foreach is used to convert array as list 
// foreach is also used as loop 

var emp=Array("jay","rajesh","vijay","amish","kumar","om","brij");
emp.forEach(display);
function display(items)
{
 var list="The name in array is :"+items;
 console.log(list);
}
