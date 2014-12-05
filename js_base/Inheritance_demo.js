//1
var obj = {};
 
obj.newFunction = function() {
  console.log('I am a dynamic function');
};
 
obj.newFunction();

//2
var obj = {
  a: 'i am a lonely property'
};
 
var newObj = {
  b: function() {
    return 'i am a lonely function';
  }
};
 
var finalObj = $.extend({}, obj, newObj);
 
console.log(finalObj.a); //outputs "i am a lonely property"
console.log(finalObj.b()); //outputs "i am a lonely function"

//3,ECMAScript 5
var obj = {
  a: 'i am a lonely property'
}; 
 
var finalObj = Object.create(obj, {
  b: {
    get: function() {
      return "i am a lonely function";
    }
  }
});
 
console.log(finalObj.a); //outputs "i am a lonely property" 
console.log(finalObj.b); //outputs "i am a lonely function"

//
var Point = function (x, y) {
    this.x = x;
    this.y = y;
    this.add = function (otherPoint) {
        this.x += otherPoint.x;
        this.y += otherPoint.y;
    }
}
 
var p1 = new Point(3, 4);
var p2 = new Point(8, 6);
p1.add(p2);

//
var Point = function (x, y) {
    this.x = x;
    this.y = y;
}
 
Point.prototype.add = function (otherPoint) {
    this.x += otherPoint.x;
    this.y += otherPoint.y;
}
 
var p1 = new Point(3, 4);
var p2 = new Point(8, 6);
p1.add(p2);