'use strict';

describe('Yeoman Test App', function() {

  
	describe('Homepage', function() {

		beforeEach(function() {
			browser().navigateTo('/');
		});

		it('should have the h1 value "AWESOMESAUCEUM!"', function() {
			expect(element('h1').text()).toBe('AWESOMESAUCEUM!');
		});

		it('should include the text Yeoman somewhere on the page',function(){
			expect(element('h3').text()).toContain('Yeoman');
		});

		it('should have 3 "things" listed on the screen',function(){
			expect(repeater('ul li').count()).toBe(3);
		});

		it('should limit results when you use the filter input',function(){
			input('query').enter('Angu');
			expect(repeater('ul li').count()).toBe(1);
			expect(element('li').text()).toBe("AngularJS");
		});
	});

	describe('Detail Page Tests',function(){
		beforeEach(function(){
			browser().navigateTo('/#/detail');
		});

		it('should have 3 items from quagmire',function(){
			expect(repeater('ul li').count()).toBe(4);
		});	

		it('should have a paragraph tag that does not include the word "Home"',function(){
			expect(element('p').text()).not().toContain('Home');
		});

		it('should only show one result for text "Nick"',function(){
			input('search.$').enter('Samuel');
			expect(repeater('table tr').count()).toBe(1);
		});
	});

});