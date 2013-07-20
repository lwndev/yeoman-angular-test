'use strict';

describe('Controller: DetailCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var DetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('DetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of quagmirish to the scope', function () {
    expect(scope.quagmire.length).toBe(4);
  });
});
