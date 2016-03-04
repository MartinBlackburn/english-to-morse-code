var assert = require('assert');
var app = require('./../src/index');

describe('English to Morse Code', function () {

    it('Translates the string "Hello" into Morse Code', function() {
        assert.equal(app.translate('hello'), '.... . .-.. .-.. ---');
    });

    it('Translates the string "Hello World" into Morse Code', function() {
        assert.equal(app.translate('hello world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('All special characters are removed', function() {
        assert.equal(app.translate(
            '§±!@£$%^&*()_-+=¡€#¢∞hello world§¶•ªº[]{}\'<>,.`~"?'),
            '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Uppercase letters are converted to lowercase', function() {
        assert.equal(app.translate('HELLO WORLD'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Translate the string "1234567890" into Morse Code', function() {
        assert.equal(app.translate('1234567890'), '.---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----');
    });

    it('Translates the string "abcdefghijklmnopqrstuvwxyz0123456789" into Morse Code', function() {
        assert.equal(app.translate('abcdefghijklmnopqrstuvwxyz0123456789'), '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----.');
    });

    it('Multiple spaces are removed', function() {
        assert.equal(app.translate('hello   world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });
});
