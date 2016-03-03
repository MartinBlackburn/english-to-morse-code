var assert = require('assert');
var app = require('./../src/index');

describe('English to Morse Code', function () {

    it('Translates the string "Hello" into Morse Code', function() {
        assert.equal(app.translate('hello'), '.... . .-.. .-.. ---');
    });

    it('Translates the string "Hello Wolrd" into Morse Code', function() {
        assert.equal(app.translate('hello world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

});
