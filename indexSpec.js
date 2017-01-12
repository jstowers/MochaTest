

// require Chai assertion library
let chai = require('chai');
let expect = chai.expect;
let should = chai.should;

describe('Sanitize', function() {
	it('returns lowercase of a string', function() {
		expect('HELLO WORLD').to.equal('HELLO world');
	});

	it('removes any hyphen')
})