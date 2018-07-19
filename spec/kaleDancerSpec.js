describe('kaleDancer', function() {
  var kaleDancer;

  beforeEach(function() {
    kaleDancer = new MakeKaleDancer(10, 20, 100);
  });

  it('should have a jQuery $node object', function() {
    expect(kaleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should be a picture of kale doing the twist', function() {
    expect(kaleDancer.$node.children('img').attr('src')).to.equal('http://www.animated-gifs.eu/category_flora/vegetables/0004.gif');
  });

});
