'use strict';

angular.module('yeomanTestApp')
  .filter('reverse', function () {
    return function (input) {
      return input.split("").reverse().join("");
    };
  });
