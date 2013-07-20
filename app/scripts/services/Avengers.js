'use strict';

angular.module('yeomanTestApp')
  .service('Avengers', function Avengers() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var Avengers = {};

    Avengers.cast = [
    	{
    		name: "Clark Gregg",
    		character: "Agent Phil Coulson"
    	},
    	{
			name: "Stellan Skarsgard",
    		character: "Selvig"
    	},
    	{
			name: "Samuel L. Jackson",
    		character: "Nick Fury"
    	}
    ]

    return Avengers;
  });
