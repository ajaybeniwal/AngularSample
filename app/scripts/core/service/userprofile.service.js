function userProfileService($http,$q){
	return {
		getAllProfiles:getAllProfiles,
		getUserProfile:getUserProfile
	}

	function getAllProfiles(){
		return $http.get('http://api.randomuser.me/?results=10')
	}
	function getUserProfile(){
		return $http.get('https://randomuser.me/api/')
	}
}
userProfileService.$inject=['$http','$q'];
export default userProfileService;