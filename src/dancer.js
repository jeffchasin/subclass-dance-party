// Creates and returns a new dancer object that can step
var MakeDancer = function (top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

MakeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // var context = this;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function () {
  var halfway = $('body').height() / 2;
  window.dancers.forEach(function (dancer) {
    dancer.$node.css({ top: halfway });
  });
};

MakeDancer.prototype.foodFight = function () {
  // calculate thirds
  var upperThirds = $('body').height() / 3;
  var lowerThirds = upperThirds * 2;
  var halfway = $('body').height() / 2;
  // loop through windows.dancers and break it into two arrays
  var firstGroup = [];
  var secondGroup = [];
  window.dancers.forEach(function (dancer, index) {
    if (index % 2 === 0) {
      firstGroup.push(dancer);
    } else {
      secondGroup.push(dancer);
    }
  });

  // for the first array, change the top property to lowerThird
  firstGroup.forEach(function (dancer) {
    dancer.$node.css({ top: upperThirds });
  });
  // for the second array, change the top property to upperThird
  secondGroup.forEach(function (dancer) {
    dancer.$node.css({ top: lowerThirds });
  });

  // animate the two arrays, to move toward each other and keep track of their position
  window.dancers.forEach(function (dancer, index) {
    dancer.$node.animate({ top: halfway }, 4000, function() {
      dancer.$node.toggle();
    });
  });

  // secondGroup.forEach(function (dancer, index) {
  //   dancer.$node.animate({ top: halfway }, 4000, function () {
  //     belushiStuff();
  //   });
  // });
  // when they touch, make two original dancers dissapear and replace with foodfight.gif + play foodfight.wav
  var belushiStuff = function () {
    $('#belushiStuff').append('<video class="belushiVideo" src="img/foodFight.mp4" autoplay="true" height="360" width="640"/>');
  };

  setTimeout(belushiStuff, 4000);

};
