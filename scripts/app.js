/* app/scripts/app.js */

define(['angular'], function(angular) {
  var module = angular.module('app', []);
  module.config([
    '$controllerProvider',
    '$compileProvider', 
    '$filterProvider', 
    '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide) {
      module.controller = $controllerProvider.register;
      module.directive = $compileProvider.directive;
      module.filter = $filterProvider.register;
      module.factory = $provide.factory;
      module.service = $provide.service;
     }
 ]);

 return module;

});