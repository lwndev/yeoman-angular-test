'use strict';

angular.module('yeomanTestApp')
  .directive('leave', function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave',function(){
    		element.removeClass(attrs.enter);
   		});
    }
  });
