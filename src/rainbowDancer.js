var MakeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

MakeRainbowDancer.prototype = Object.create(makeDancer.prototype);
MakeRainbowDancer.prototype.constructor = MakeRainbowDancer;
MakeRainbowDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  var colorLooper = Math.floor(Math.random() * colors.length);
  var color = colors[colorLooper];
  this.$node.css('border-color', color);
};