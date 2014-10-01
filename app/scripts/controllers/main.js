'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.WorldCtrl = function($scope) {
      $scope.population = 700;
      $scope.countries = [{
        name: 'France',
        population: 63.1
      }, {
        name: 'United Kingdom',
        population: 61.8
      }, ];
      $scope.worldsPercentage = function(countryPopulation) {
        return (countryPopulation / $scope.population) * 1000;
      };

    };



  });
