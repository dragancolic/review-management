'use strict';

function ReviewManagementController($scope, ReviewManagementService){

  function _init(){
    $scope.model = { 
        selectedSortReviewFilter : undefined,
        currentPage : 1,
        pageSize : 5,
        newReview : ReviewManagementService.getEmptyReview(),
        reviews : ReviewManagementService.getReviews(),
        sortReviewFilters : [{ id: "text", name: "Review" }, { id: "id", name: "Date Created" }]
    };
  };
  $scope.submitReview = function(){
    if($scope.model.newReview.text.trim().length < 1) return;
    ReviewManagementService.write($scope.model.newReview);
    $scope.model.newReview = ReviewManagementService.getEmptyReview();
  };
  _init();
};

reviewManagementApp.controller('ReviewManagementController', ReviewManagementController);