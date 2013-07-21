'use strict';

angular.module('yeomanTestApp')
  .directive('strength', function () {
    return {
      require: "superhero",
      link: function postLink(scope, element, attrs, superheroCtrl) {
          superheroCtrl.addStrength();
          superheroCtrl.addFlight();
          superheroCtrl.addSpeed();
      }
    };
  });
