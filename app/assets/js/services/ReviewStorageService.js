'use strict';

function ReviewStorageService(){
  
  var storageKey = 'review-management-app-reviews-storage-key';
  
  function _getStorageKey(){
    return storageKey;
  };
  function _getDataFromBrowser(){
    var reviews = [];
    var reviewsFromLocalStorage = JSON.parse(localStorage.getItem(storageKey));
    angular.forEach(reviewsFromLocalStorage, function(review) {
      reviews.push(new ReviewModel(review.id, review.text, review.dateCreated));
    });
    return reviews;
  };
  function _storeDataToBrowser(reviews){
    if(reviews === undefined || reviews === null || reviews.length === 0) {
      console.log('WARN: ReviewStorageService - store data to browser skipped, "reviews" cannot be empty.')
      return false;
    }
    localStorage.setItem(storageKey, JSON.stringify(reviews));
    return true;
  };

  var hostObject = {
    getDataFromBrowser : function(){
      return _getDataFromBrowser();
    }, 
    storeDataToBrowser : function(reviews){
      return _storeDataToBrowser(reviews);
    }
  };
  return hostObject;
};

reviewManagementApp.factory('ReviewStorageService', ReviewStorageService);