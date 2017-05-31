'use strict';

describe('ReviewManagementController test suite', function(){

	var $controller, 
	    $scope,
	    reviewManagementController,
	    reviewManagementService;

	var modelMock = {
		selectedSortReviewFilter : undefined,	
        currentPage : 1,
        pageSize : 5,
        newReview : new ReviewModel(0, '', ''),
        reviews: [],
        sortReviewFilters : [{ id: "text", name: "Review" }, { id: "id", name: "Date Created" }]
	};

	beforeEach(function() {
        module('reviewManagementApp', function($provide) {
           var mockDependency = {
	          getDataFromBrowser: function () {
	            return modelMock.reviews;
	          },
	          storeDataToBrowser: function () {
	            return;
	          },
	          write: function(review){
	          	modelMock.reviews.push(review);
	          }
	       };	
      	   $provide.value('ReviewStorageService', mockDependency);
        });
        inject(function (_$controller_, _ReviewManagementService_) {
	  		$controller = _$controller_;
	  		$scope = {};
	  		reviewManagementService = _ReviewManagementService_;
	  		reviewManagementController = $controller('ReviewManagementController', { $scope: $scope, ReviewManagementService: reviewManagementService });
        });
    });

	it('init() should initialize the model properly.', function () {
		expect($scope.model).toEqual(modelMock);
	});

	it('submitReview() should add a new review to the reviews array', function () {
		$scope.model.newReview.text = 'test';
	    $scope.submitReview();
		expect($scope.model.reviews[0].text).toEqual('test');
	});
});
