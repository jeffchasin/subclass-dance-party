describe('rainbowDancer', function() {
  var rainbowDancer;

  beforeEach(function() {
    rainbowDancer = new MakeRainbowDancer(10, 20, 100);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a border-color attribute', function() {
    expect(rainbowDancer.$node.attr('style')).to.have.string('border-color');
  });

});
