let expect = require('chai').expect;
let dragAndDrop = require('html-dnd').codeForSelectors;

describe('Drag & Drop: https://the-internet.herokuapp.com/drag_and_drop', function() {

	it('Should drag the element from A to B', function() {
        browser.url('https://the-internet.herokuapp.com/drag_and_drop')
        browser.pause(3000);
		browser.execute(dragAndDrop, '#column-b', '#column-a');
		let column1Text = $('#column-a').getText()
        expect(column1Text).to.equal('B');
        
        browser.pause(3000);
	});

});