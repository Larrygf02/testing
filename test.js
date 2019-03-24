describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 4), 16);
    });
    
    it("comprobando suma", function() {
        assert.equal(sum(2,4), 6);
    })

    //detectando multiples llamadas
    it('double done', function(done) {
        setImmediate(done);
        setImmediate(done);
    })
  
  });