import UserProfileCtrl from './userprofile.controller'
import UserListCtrl from './userlist.controller'
import NewUserCtrl from './adduser.controller'
import userProfileRouteConfig from './userprofile.route'
import coreModule from '../../scripts/core/core.index'
import route  from 'angular-route'
angular.module('app.userprofile',[route,coreModule]).
config(userProfileRouteConfig).
controller('UserProfileCtrl',UserProfileCtrl).
controller('UserListCtrl',UserListCtrl).
controller('NewUserCtrl',NewUserCtrl)
export default 'app.userprofile'