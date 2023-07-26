---
title: Higher-Order Function
date: 2023-7-24
categories:
  - frond-end
tags :
  - base
---
## **What is Functional Programming? 函数式编程**
In most simple term, Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values. In functional programming, we think and code in terms of functions.

JavaScript treats functions as first-class citizens. That’s because in JavaScript or any other functional programming languages functions are objects.

In JavaScript, everything you can do with other types like object, string, or number, you can do with functions. **You can pass them as parameters to other functions (callbacks), assign them to variables and pass them around etc.** This is why functions in JavaScript are known as First-Class Functions.

## **higher-order functions 高阶函数**
至少满足以下条件的中的一个，就是高阶函数：
- 将其他函数作为参数传递（回调函数）：如AJAX callback(res),数据排序
- 将函数作为返回值

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the language.

```js
function forEach(arr,callback){
  for(var i=0;i<arr.length;i++){
    callback(arr[i])
  }
}
```
```js
function before(func,n){
    let result
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}
```
```js
function waitSomeTime(msg, time) {
	setTimeout(function () {
		console.log(msg)
	}, time);
}
waitSomeTime('hello', 1000);
```
```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

```js
function getCounter() {
  let counter = 0;
  return function() {
    return counter++;
  }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2
```
Again we are storing the anonymous inner function returned by getCounter function into the count variable. As count function is now a closure, it can access the counter variable of getCounter function even after getCounter() has returned.

But notice that the value of the counter is not resetting to 0 on each count function call as it usually should.

That’s because, at each call of count(), a new scope for the function is created, but there is only single scope created for getCounter function, because the counter variable is defined in the scope of getCounter(), it would get incremented on each count function call instead of resetting to 0.

### Array.prototype.map
创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
```js
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
```