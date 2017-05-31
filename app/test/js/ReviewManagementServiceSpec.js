'use strict';

describe('ReviewManagementService test suite', function(){

	var reviewManagementService, 
	    reviewsMock = [],
	    emptyReviewMock = new ReviewModel(0, '', '');

	beforeEach(function() {
 		module('reviewManagementApp', function($provide) {
           var mockDependency = {
	          getDataFromBrowser: function () {
	            return reviewsMock;
	          },
	          storeDataToBrowser: function () {
	            return;
	          }	       
	      };	
      	  $provide.value('ReviewStorageService', mockDependency);
        });
        inject(function (_ReviewManagementService_) {
	  		reviewManagementService = _ReviewManagementService_;
	  	});
    });

	it('getEmptyReview() should return an empty ReviewModel.', function () {
		expect(reviewManagementService.getEmptyReview()).toEqual(emptyReviewMock);
	});

	it('getReviews() should return an empty review array.', function () {
		expect(reviewManagementService.getReviews()).toEqual(reviewsMock);
	});

	it('write(review) should add a new review to the reviews array.', function () {
		var newReviewMock = new ReviewModel(0, 'test', '');
		reviewManagementService.write(newReviewMock);
		expect(reviewManagementService.getReviews()[0].text).toEqual(newReviewMock.text);
	});
});
