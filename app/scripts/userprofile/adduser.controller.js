function NewUserCtrl($scope,userProfileService,$location){
	var vm=this;
	this.save=function(){
		$location.path('/');

	}
}
NewUserCtrl.$inject=['$scope','userProfileService','$location']
export default NewUserCtrl;