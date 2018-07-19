var MakeKaleDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="img/kale.gif" alt="Gif of Kale" height="73" width="88">').removeClass('dancer').addClass('kaleDancer');

  this.$node.on('mouseover', function(event) {
    var $img = $( this ).children('img');
    $img.attr('src', 'img/donut.gif');
  });

};

MakeKaleDancer.prototype = Object.create(MakeDancer.prototype);
MakeKaleDancer.prototype.constructor = MakeKaleDancer;
MakeKaleDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

