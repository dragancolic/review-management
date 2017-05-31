'use strict';

function ReviewManagementService(ReviewStorageService){
  
  var idCounter = 0;
  var reviews = [];
  
  function _getEmptyReview(){
    return new ReviewModel(0, '', '');
  };
  function _getReviews(){
    return reviews;
  };
  function _write(review){
    if(review === undefined || review === null) {
       console.log('ERROR: ReviewManagementService - write new review, "review" cannot be undefined or null.');
       return;
    }; 
    review.id = ++idCounter;
    review.dateCreated = new Date();
    reviews.push(review);
  };
  function _init(){
    reviews = ReviewStorageService.getDataFromBrowser();
    if(reviews.length > 0) {
      idCounter = Math.max.apply(Math, _getReviews().map(function(o){return o.id;}));
    }
    window.onbeforeunload = function(e) {
      ReviewStorageService.storeDataToBrowser(reviews);
    };
  };

  var hostObject = {
    getEmptyReview : function(){
      return _getEmptyReview();
    },
    getReviews : function(){
      return _getReviews();
    },
    write : function(review){
      _write(review);
    }
  };

  _init();
  return hostObject;
};

reviewManagementApp.factory('ReviewManagementService', ReviewManagementService);