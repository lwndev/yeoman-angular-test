'use strict';

describe('Service: Avengers', function () {

  // load the service's module
  beforeEach(module('yeomanTestApp'));

  // instantiate service
  var Avengers;
  beforeEach(inject(function (_Avengers_) {
    Avengers = _Avengers_;
  }));

  it('should do something', function () {
    expect(!!Avengers).toBe(true);
  });

  it('should return an object with the property "cast"', function() {
    expect(Avengers.cast).toBeDefined();
  });

  it('should have at least one cast member',function(){
    expect(Avengers.cast.length).toBeGreaterThan(0);
  });

});
