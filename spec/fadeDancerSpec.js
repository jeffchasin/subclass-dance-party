describe('fadeDancer', function() {

  var fadeTestDancer;

  beforeEach(function() {
    fadeTestDancer = new MakeFadeDancer(10, 20, 100);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeTestDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not have the dancer class', function() {
    expect(fadeTestDancer.$node.hasClass('dancer')).to.be.false;
  });

  it('should have the colorDancer class', function() {
    expect(fadeTestDancer.$node.hasClass('colorDancer')).to.be.true;
  });

});
