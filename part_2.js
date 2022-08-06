// function Surrogate();
// Surrogate.prototype = Animal.prototype
// Cat.prototype = new Surrogate();
// Cat.prototype.constructor = Cat;

// Cat.inherits(Animal)
Function.prototype.inherits = function(parent) {
  // this = Cat constructor

  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}
