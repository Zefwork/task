describe('Remaining time', function(){
  it('Is null at start', function(){
    assert.typeOf(getRemTime(), 'object')
  });

  describe('Scroll function', function () {
    it('Undefined', function () {
      assert.typeOf(scrollTo(), 'undefined')
    });
  });

  describe('Num is equal', function () {
    it('Num = 5', function () {
      assert.equal(num, 5)
    });
  });
});