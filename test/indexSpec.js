

// require Chai assertion library
let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

var word = require('../src/index');

describe('Sanitize', function() {

	// HOOKS
	// you can add different hooks
	// helpful to initialize a database, end-to-end testing,
	// or close something after a test runs

	// Examples:
	// beforeEach (this function runs before each it test)
	// before (function runs once before all the tests)
	// after
	// afterEach

	/*
	before(function() {
		console.log('before:')
	})
	*/

	// OTHER USEFUL HOOKS
	// use it.only to only run one test out of many
	// use it.skip to skip a test that is failing

	it('returns lowercase of a string', function() {
		let inputWord = 'HELLO WORLD';
		let outputWord = word.sanitize(inputWord);
		expect(outputWord).to.equal('hello world');
	});

	it('removes any hyphen', function() {
		let inputWord = 'HELLO-WORLD';
		var outputWord = word.sanitize(inputWord);
		expect(outputWord).to.equal('hello world');
	});

	it('tests different assertions', function() {
		let word = 'hello world';
		expect(word).to.not.equal('HELLO WORLD');
		expect(word).to.contain('hello');
		expect(word).to.be.a('string');
	})
})


// REPORTERS

// doc => generates your test results in HTML format
// can then pipe to an output file
// $ mocha indexSpec.js --reporter doc > out.html"

// open the output in your browser
// $ open out.html 



