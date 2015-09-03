var app = angular.module('simpleUiRouter.tournaments', ['ui.router']);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('tournaments', {
      abstract: true,
      url: "/tournaments",
      templateUrl: 'app/tournaments/tournaments.html',
      controller: function($scope, tournamentsService) {
        $scope.tournaments = tournamentsService.tournaments;
      }
    })
    .state('tournaments.list', {
      url: '',
      templateUrl: "app/tournaments/tournaments.list.html",
      controller: function($scope, $stateParams, tournamentsService) {
      $scope.tournaments = tournamentsService.tournaments;}
    })
    .state('tournaments.instance', {
      url: "/:id",
      templateUrl: "app/tournaments/tournaments.instance.html",
      controller: function($scope, $stateParams, tournamentsService) {
        $scope.id = $stateParams.id;
        $scope.t = tournamentsService.findById(tournamentsService.tournaments, parseInt($scope.id));
        console.log($scope.t);
      }
    })
}]);

app.factory('tournamentsService', function() {
  var tourneys = [
    { id: 45, name: 'Leather', format:'T20-League'},
    { id: 67, name: 'Tape', format:'T20-League'},
    { id: 89, name: 'Test', format:'4-Innings'}
  ];
  return {
    tournaments: tourneys,
    findById: function(tList, id) {
      for (var i = 0; i < tList.length; ++i) {
        if (id === tList[i].id)
          return tList[i];
      }
      return null;
    }
  }
});
