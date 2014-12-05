//1
(function(){
  //do some work
})();

//2
(function(window, $, undefined){
  //do some work
})(window, jQuery);

//3,namespace
window.myApp = window.myApp || {};
window.myApp.someFunction = function(){
  //so some work
};

//4
(function(myApp, $, undefined){
  //do some work
}(window.myApp = window.myApp || {}, jQuery));

window.myApp = (function(myApp, $, undefined){
  //do some work
  return myApp;
})(window.myApp || {}, jQuery);//也可以这样写

//5,Revealing Module Pattern
var myModule = (function($, undefined){
  var myVar1 = '',
  myVar2 = '';
 
  var someFunction = function(){
    return myVar1 + " " + myVar2;
  };
 
  return {
    getMyVar1: function() { return myVar1; }, //myVar1 public getter
    setMyVar1: function(val) { myVar1 = val; }, //myVar1 public setter
    someFunction: someFunction //some function made public
  }
})(jQuery);


//6,Creating Constructors (Classes)
var Person = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
 
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};
var person = new Person("Justin", "Etheredge");
alert(person.fullName());

var Spy = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
Spy.prototype = new Person();
 
Spy.prototype.spy = function(){
  alert(this.fullName() + " is spying.");   
}
 
var mySpy = new Spy("Mr.", "Spy", 50);
mySpy.spy();
