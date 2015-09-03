var app = angular.module('simpleUiRouter', [
  'simpleUiRouter.tournaments',
  'ui.router']);

app.run([ '$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  console.log("Simple Ui Router Example");
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  console.log(JSON.stringify($state));
}]);
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/t?id', '/tournaments/:id')
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('aboutus', {
      url: "/",
      template: "<div style='padding-left: 50px'><h2> About us: </h2> <p> Simple Template on About us <p> </div>"
    })
});
