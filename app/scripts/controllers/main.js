'use strict';
/*global d3*/

angular.module('d3ExperimentApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
          
    console.dir(d3);
    $scope.data = [4, 8, 15, 16, 23, 42, 55, 1];
    var scale = d3.scale.linear()
            .domain([0, d3.max($scope.data)])
            .range([0,420]);
    
    $scope.setWidth = function(number){
        return {width: scale(number)+'px'};
      };
  }]);
