angular.module('services',[])
.factory("indexServices", function($http) {
    return {
        getIndexList: function(pageIndex) {
        	 var url = "http://127.0.0.1:8020/angularDemo/";
		   	return $http.get(url+"src/json/indexData.json").then(function(response) {
		   		//console.log(response.data);
            	return response.data;
            });
        } 
    };
});
