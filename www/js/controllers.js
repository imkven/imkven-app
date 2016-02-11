angular.module('starter.controllers', ['ionic'])

.controller('EntriesCtrl', function($scope, $ionicLoading, ContentService) {
  $scope.openInAppBrowser = function(url) {
    window.open(url, '_blank');
  };

  $ionicLoading.show({
    template: 'Loading...'
  });

  ContentService.get('http://localhost:3000/feed').then(function(res){
    console.log('res.data', res.data);
    $scope.feed = res.data;
    $ionicLoading.hide();
  });
});
