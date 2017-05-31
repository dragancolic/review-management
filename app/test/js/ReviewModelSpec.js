'use strict';

describe('ReviewModel test suite', function(){

	function ReviewModelMock(){
		this.id = 0;
		this.text = '';
		this.dateCreated = '';
	};

	it('should create and validate an empty ReviewModel.', function () {

		var reviewModelMock = new ReviewModelMock(0,'','');
		var reviewModel = new ReviewModel(0,'','');

		expect(reviewModelMock.id).toEqual(reviewModel.id);
		expect(reviewModelMock.text).toEqual(reviewModel.text);
		expect(reviewModelMock.dateCreated).toEqual(reviewModel.dateCreated);
	});
});