'use strict';

angular.module('yeomanTestApp')
  .controller('DetailCtrl', function ($scope, Avengers) {
    $scope.quagmire = [
      'giggity',
      'giggity',
      'giggity',
      'goo'
    ];

    $scope.avengers = Avengers;
  });
