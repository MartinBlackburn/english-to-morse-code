var assert = require('assert');
var app = require('./../src/index');

describe('English to Morse Code', function () {

    it('Translates 0', function() {
        assert.equal(app.translate('0'), '-----');
    });

    it('Translates 1', function() {
        assert.equal(app.translate('1'), '.----');
    });

    it('Translates 2', function() {
        assert.equal(app.translate('2'), '..---');
    });

    it('Translates 3', function() {
        assert.equal(app.translate('3'), '...--');
    });

    it('Translates 4', function() {
        assert.equal(app.translate('4'), '....-');
    });

    it('Translates 5', function() {
        assert.equal(app.translate('5'), '.....');
    });

    it('Translates 6', function() {
        assert.equal(app.translate('6'), '-....');
    });

    it('Translates 7', function() {
        assert.equal(app.translate('7'), '--...');
    });

    it('Translates 8', function() {
        assert.equal(app.translate('8'), '---..');
    });

    it('Translates 9', function() {
        assert.equal(app.translate('9'), '----.');
    });

    it('Translates a', function() {
        assert.equal(app.translate('a'), '.-');
    });

    it('Translates b', function() {
        assert.equal(app.translate('b'), '-...');
    });

    it('Translates c', function() {
        assert.equal(app.translate('c'), '-.-.');
    });

    it('Translates d', function() {
        assert.equal(app.translate('d'), '-..');
    });

    it('Translates e', function() {
        assert.equal(app.translate('e'), '.');
    });

    it('Translates f', function() {
        assert.equal(app.translate('f'), '..-.');
    });

    it('Translates g', function() {
        assert.equal(app.translate('g'), '--.');
    });

    it('Translates h', function() {
        assert.equal(app.translate('h'), '....');
    });

    it('Translates i', function() {
        assert.equal(app.translate('i'), '..');
    });

    it('Translates j', function() {
        assert.equal(app.translate('j'), '.---');
    });

    it('Translates k', function() {
        assert.equal(app.translate('k'), '-.-');
    });

    it('Translates l', function() {
        assert.equal(app.translate('l'), '.-..');
    });

    it('Translates m', function() {
        assert.equal(app.translate('m'), '--');
    });

    it('Translates n', function() {
        assert.equal(app.translate('n'), '-.');
    });

    it('Translates o', function() {
        assert.equal(app.translate('o'), '---');
    });

    it('Translates p', function() {
        assert.equal(app.translate('p'), '.--.');
    });

    it('Translates q', function() {
        assert.equal(app.translate('q'), '--.-');
    });

    it('Translates r', function() {
        assert.equal(app.translate('r'), '.-.');
    });

    it('Translates s', function() {
        assert.equal(app.translate('s'), '...');
    });

    it('Translates t', function() {
        assert.equal(app.translate('t'), '-');
    });

    it('Translates u', function() {
        assert.equal(app.translate('u'), '..-');
    });

    it('Translates v', function() {
        assert.equal(app.translate('v'), '...-');
    });

    it('Translates w', function() {
        assert.equal(app.translate('w'), '.--');
    });

    it('Translates x', function() {
        assert.equal(app.translate('x'), '-..-');
    });

    it('Translates y', function() {
        assert.equal(app.translate('y'), '-.--');
    });

    it('Translates z', function() {
        assert.equal(app.translate('z'), '--..');
    });

    it('Translates space character', function() {
        assert.equal(app.translate(' '), '/');
    });

    it('All special characters are removed', function() {
        assert.equal(app.translate(
            '§±!@£$%^&*()_-+=¡€#¢∞hello world§¶•ªº[]{}\'<>,.`~"?'),
            '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Multiple spaces are removed', function() {
        assert.equal(app.translate('hello   world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
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
});
