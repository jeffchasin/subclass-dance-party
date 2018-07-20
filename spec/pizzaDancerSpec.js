describe('pizzaDancer', function() {

  var pizzaTestDancer;

  beforeEach(function() {
    pizzaTestDancer = new MakePizzaDancer(10, 20, 100);
  });

  it('should have a jQuery $node object', function() {
    expect(pizzaTestDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should not have the dancer class', function() {
    expect(pizzaTestDancer.$node.hasClass('dancer')).to.be.false;
  });

  it('should have the colorDancer class', function() {
    expect(pizzaTestDancer.$node.hasClass('pizzaDancer')).to.be.true;
  });

});
