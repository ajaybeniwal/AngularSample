import angular from 'angular';
import route  from 'angular-route'
import ngMaterial from 'angular-material'
import userProfileModule from './userprofile/userprofile.index'
const moduleName = 'app';
angular.module(moduleName, [route,ngMaterial,userProfileModule])
export default moduleName;