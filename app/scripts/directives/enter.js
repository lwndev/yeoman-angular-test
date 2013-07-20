'use strict';

angular.module('yeomanTestApp')
  .directive('enter', function () {
  	return function(scope,element,attrs){
  		element.bind('mouseenter',function(){
    		element.addClass(attrs.enter);
   		});
  	}
  });
