var assert = require('assert');
var app = require('./../src/index');

var longtext = "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.";
// See codepen for rest of generation code


describe('English to Morse Code', function () {

    it('Translates the string "Hello" into Morse Code', function() {
        assert.equal(app.translate('hello'), '.... . .-.. .-.. ---');
    });

    it('Translates the string "Hello World" into Morse Code', function() {
        assert.equal(app.translate('hello world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Translates the long string "Call me Ishmael[...]" into Morse Code', function() {
        assert.equal(app.translate('hello world'), '');
    });

});
