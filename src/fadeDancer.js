var MakeFadeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('colorDancer').fadeToggle(1000);
};

MakeFadeDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadeDancer.prototype.constructor = MakeFadeDancer;
MakeFadeDancer.prototype.changeColor = function() {
  MakeDancer.prototype.step.call(this);
};
