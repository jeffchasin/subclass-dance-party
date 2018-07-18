var MakeRainbowDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeRainbowDancer.prototype = Object.create(MakeDancer.prototype);
MakeRainbowDancer.prototype.constructor = MakeRainbowDancer;
MakeRainbowDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var colors = ['orange', 'yellow', 'green', 'blue'];
  var colorLooper = Math.floor(Math.random() * colors.length);
  var color = colors[colorLooper];
  this.$node.css('border-color', color);
};
