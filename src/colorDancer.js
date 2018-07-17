var MakeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('colorDancer').fadeTo(1000, 1);
};

MakeColorDancer.prototype = Object.create(makeDancer.prototype);
MakeColorDancer.prototype.constructor = MakeColorDancer;
MakeColorDancer.prototype.changeColor = function() {
  makeDancer.prototype.step.call(this);
};
