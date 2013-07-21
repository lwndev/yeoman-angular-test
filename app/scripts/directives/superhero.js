'use strict';

angular.module('yeomanTestApp')
  .directive('superhero', function () {
    return {
        scope: {},
        restrict: 'E',
        controller: function($scope){
            $scope.abilities = [];

            this.addStrength = function(){
                $scope.abilities.push("strength");
            }

            this.addSpeed = function(){
                $scope.abilities.push("speed");
            }

            this.addFlight = function(){
                $scope.abilities.push("flight");
            }

      },
      link: function postLink(scope, element, attrs) {
          element.bind("mouseenter",function(){
              console.log(scope.abilities);
          });

      }
    };
  });
