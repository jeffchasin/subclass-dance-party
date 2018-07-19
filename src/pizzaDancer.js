var MakePizzaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.removeClass('dancer').addClass('colorDancer').fadeToggle(1000);
  this.$node.append('<img src="img/pizza.gif" alt="pizza" height="100" width="100" >').removeClass('dancer').addClass('pizzaDancer');
};

MakePizzaDancer.prototype = Object.create(MakeDancer.prototype);
MakePizzaDancer.prototype.constructor = MakePizzaDancer;
MakePizzaDancer.prototype.changeColor = function() {
  MakeDancer.prototype.step.call(this);
};
