angular.module('starter.controllers', ['ionic'])

.controller('EntriesCtrl', function($scope, $ionicLoading, FeedService) {
  $scope.openInAppBrowser = function(url) {
    window.open(url, '_blank');
  };

  $ionicLoading.show({
    template: 'Loading...'
  });

  FeedService.parseFeed('http://imkven.github.io/feed.xml').then(function(res){
    $scope.feed = res.data.responseData.feed;
    $ionicLoading.hide();
  });
});
