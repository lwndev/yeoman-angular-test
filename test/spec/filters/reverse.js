'use strict';

describe('Filter: reverse', function () {

  // load the filter's module
  beforeEach(module('yeomanTestApp'));

  // initialize a new instance of the filter before each test
  var reverse;
  beforeEach(inject(function ($filter) {
    reverse = $filter('reverse');
  }));

  it('should return the reverse of the text that is provided"', function () {
    var text = 'angularjs';
    expect(reverse(text)).toBe('sjralugna');
  });

  it('should return the reverse of the text regardless of what text is provided', function(){
    var text = 'Angular is a vast framework with lots of stuff';
    expect(reverse(text)).toBe('ffuts fo stol htiw krowemarf tsav a si ralugnA');
  });

});
