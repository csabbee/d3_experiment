'use strict';

angular.module('d3ExperimentApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    
    $scope.data = [4, 8, 15, 16, 23, 42, 55, 1];
    $scope.setWidth = function(number){
        return {width: number*10+'px'};
    };
  }]);
