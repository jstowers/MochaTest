

// require Chai assertion library
let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

var word = require('./src/index');

describe('Sanitize', function() {
	it('returns lowercase of a string', function() {

		var inputWord = 'HELLO WORLD';
		var outputWord = word.sanitize(inputWord);
		expect(outputWord).to.equal('hello world');
	});

	it('removes any hyphen');

	it('tests different assertions', function() {
		let word = 'hello world';
		expect(word).to.not.equal('HELLO WORLD');
		expect(word).to.contain('hello');
		expect(word).to.be.a('string');
	})
})