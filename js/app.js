// Array is for putting other named dependencies modules
angular.module('EmailApp', [
  'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .otherwise({
        redirectTo: '/inbox'
      });
  });

function TestCtrl($scope) {
  $scope.title = "Write a title here...";
};
