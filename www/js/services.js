angular.module('starter.services', [])

.factory('ContentService',['$http',function($http){
    return {
        get: function(url){
            return $http.get(url);
        }
    }
}]);
