function userProfileRouteConfig($routeProvider){
  $routeProvider.
      when('/', {
        templateUrl: '/app/scripts/userprofile/user-list.html',
        controller: 'UserListCtrl',
        controllerAs:'vm'
      }).
      when('/addnew', {
        templateUrl: '/app/scripts/userprofile/add-user.html',
        controller: 'NewUserCtrl',
        controllerAs:'vm'
      }).
      when('/userdetail', {
        templateUrl: '/app/scripts/userprofile/user-profile.html',
        controller: 'UserProfileCtrl',
        controllerAs:'vm'
      }).
      otherwise({
        redirectTo: '/'
      });
}

userProfileRouteConfig.$inject=['$routeProvider']
export default userProfileRouteConfig;