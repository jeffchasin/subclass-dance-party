var MakeKaleDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="http://www.animated-gifs.eu/category_flora/vegetables/0004.gif" alt="Gif of Kale" height="73" width="88">').removeClass('dancer').addClass('kaleDancer');
};

MakeKaleDancer.prototype = Object.create(MakeDancer.prototype);
MakeKaleDancer.prototype.constructor = MakeKaleDancer;
MakeKaleDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // var colors = ['orange', 'yellow', 'green', 'blue'];
  // var colorLooper = Math.floor(Math.random() * colors.length);
  // var color = colors[colorLooper];
  // this.$node.css('border-color', color);
};
