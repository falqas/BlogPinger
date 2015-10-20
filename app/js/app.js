'use strict';


// Declare app level module which depends on filters, and services
// module is like container for app, also allows us to declare dependencies. says it needs the below items to work correctly
angular.module('myApp', [   // module is like container for app, also allows us to declare dependencies. says it needs the below items to work correctly
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase' //adding firebase dependencies
]).
config(['$routeProvider', function($routeProvider) {  
  $routeProvider.when('/', {
    templateUrl: 'partials/landing_page.html',
    controller: 'LandingPageController'
  });
  // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'}); // takes 2 params - the string for the url path, and an obj w 2 properties. templateUrl specifies the html file that we're going to load for the page. first is partial for view 1. controller is an obj used to handle data for page, thru something called scope. eg if a page is a list of articles, our controller get that data, makes it available for template. mycontroller is referenced in the controllers.js file
  $routeProvider.when('/waitlist', {
    templateUrl: 'partials/waitlist.html',
    controller: 'WaitlistController'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);

