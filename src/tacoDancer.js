var MakeTacoDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want
  // the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
  this.$node.append('<img src="img/taco.png" alt="Joe\'s Tacos" height="100" width="148" />').removeClass('dancer').addClass('tacoDancer');

  // return blinkyDancer;
};

MakeTacoDancer.prototype = Object.create(MakeDancer.prototype);
MakeTacoDancer.prototype.constructor = MakeTacoDancer;
MakeTacoDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  // oldStep();
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // this.$node.toggle();
};

