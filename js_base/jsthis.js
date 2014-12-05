function  hello (thing) {
	console.log(this + " says hello " + thing + ".");
}

hello.call("zhh007", "world");

var person = {
	name : "zhh007",
	hello : function(thing) {
		console.log(this.name + " says hello " + thing + ".");
	}
}
person.hello("world");

person.hello.call(person, "world");

var bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments);
  }
}
 
var boundHello = bind(person.hello, person);
boundHello("world") 

//函数重写
function globalFunction() {
  console.log('I am the original global function');
}
 
function overWriteTheGlobal() {
  globalFunction = function() {
    console.log('I am the new global function');
  }
}
globalFunction(); //outputs "I am the original global function"
overWriteTheGlobal(); //this will overwrite the original global function
globalFunction(); //outputs "I am the new global function"

// module pattern
//self-executing anonymous function
var module = {};
 
(function(exports){
 
  exports.notGlobalFunction = function() {
    console.log('I am not global');
  };  
 
}(module));
 
function notGlobalFunction() {
  console.log('I am global');
}
 
notGlobalFunction(); //outputs "I am global"
module.notGlobalFunction(); //outputs "I am not global"

//全局变量被重写
var imAGlobal = true;
 
function globalGrabber() {
  imAGlobal = false;
  return imAGlobal;
}
 
console.log(imAGlobal); //outputs "true"
console.log(globalGrabber()); //outputs "false"
console.log(imAGlobal); //outputs "false"

//全局变量没有被重写
var imAGlobal = true;
 
function globalGrabber() {
  var imAGlobal = false;//这里重新定义了
  return imAGlobal;
}
 
console.log(imAGlobal); //outputs "true"
console.log(globalGrabber()); //outputs "false"
console.log(imAGlobal); //outputs "true"

//局部变量被提升为全局变量
function variableHoist() {
  console.log(hoisty);
  hoisty = 1;  
  console.log(hoisty);
  var hoisty = 2;
  console.log(hoisty);
}
 
variableHoist(); 
//outputs undefined (would get a ReferenceError if no var declaration existed in scope)
//outputs "1"
//outputs "2"
 
try {
  console.log(hoisty); //outputs ReferenceError (no global var "hoisty")
} catch (e) {
  console.log(e);
}

//function 定义的函数，可以执行在前，定义在后
myFunction(); //outputs "i exist"
 
function myFunction() {
  console.log('i exist');
}

//var 定义的函数，执行在前会报错
try {
  myFunction();
} catch (e) {
  console.log(e); //throws "Uncaught TypeError: undefined is not a function"
}
var myFunction = function() {
  console.log('i exist');
}
 
myFunction();  //outputs "i exist"

//Understanding “this”
console.log(this); // outputs window object
 
var myFunction = function() {
  console.log(this);
}
 
myFunction(); //outputs window object
 
var newObject = {
  myFunction: myFunction
}
 
newObject.myFunction(); //outputs newObject

//2
var myFunction = function(arg1, arg2) {
  console.log(this, arg1, arg2);
};
 
var newObject = {};
 
myFunction.call(newObject, 'foo', 'bar'); //outputs newObject "foo" "bar" 
myFunction.apply(newObject, ['foo', 'bar']); //outputs newObject "foo" "bar"