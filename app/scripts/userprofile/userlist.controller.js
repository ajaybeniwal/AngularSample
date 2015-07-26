function UserListCtrl($scope,userProfileService,$location){
	var vm=this;
	vm.showSpinner=true;
	userProfileService.getAllProfiles().then(data=>{
		this.userList=data.data.results;
		vm.showSpinner=false;
	},error=>{
		vm.showSpinner=false;
	});

	vm.showProfile=function(){
		$location.path('/userdetail');
	}
	vm.addnew=function(){
		$location.path('/addnew');
	}
}
UserListCtrl.$inject=['$scope','userProfileService','$location']
export default UserListCtrl;