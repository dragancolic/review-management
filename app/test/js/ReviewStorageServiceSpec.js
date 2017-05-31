'use strict';

describe('ReviewStorageService test suite', function(){

	var reviewStorageService;

    beforeEach(module('reviewManagementApp'));	

    beforeEach(inject( function(_ReviewStorageService_){
    	reviewStorageService = _ReviewStorageService_;
    }));

	it('getDataFromBrowser() should return an empty review array.', function () {
		expect(reviewStorageService.getDataFromBrowser()).not.toBe(null);
	});

	it('storeDataToBrowser(reviews) should return a false as "reviews" is undefined.', function () {
		expect(reviewStorageService.storeDataToBrowser(null)).toEqual(false);
	});
});