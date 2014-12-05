//1
var remoteValue = false;
$.ajax({
  url: 'http://google.com',
  success: function() {
    remoteValue = true;
  }
});
 
console.log(remoteValue); //outputs "false"

//2
var remoteValue = false;
 
var doSomethingWithRemoteValue = function() {
  console.log(remoteValue); //outputs true on success
}
 
$.ajax({
  url: 'https://google.com',
  complete: function() {
    remoteValue = true;
    doSomethingWithRemoteValue();    
  }
});

//3,串行化
var remoteValue = false;
 
var doSomethingWithRemoteValue = function() {
  console.log(remoteValue); 
}
 
var promise = $.ajax({
  url: 'https://google.com'
});
 
//outputs "true"
promise.always(function() {
  remoteValue = true;
  doSomethingWithRemoteValue();    
});
 
//outputs "foobar"
promise.always(function() {
  remoteValue = 'foobar';
  doSomethingWithRemoteValue();    
});