function UserProfileCtrl($scope,userProfileService,$location){
	var vm=this;
	vm.showSpinner=true;
	userProfileService.getUserProfile().then(data=>{
			this.user=data.data.results[0];
			console.log(this.user);
			vm.showSpinner=false;
	});
	this.save=function(){
		$location.path('/');

	}
}
UserProfileCtrl.$inject=['$scope','userProfileService','$location']
export default UserProfileCtrl;