import assert from 'assert';
import translate from './../src/index';

describe('English to Morse Code', () => {

    it('Translates the string "Hello" into Morse Code', () => {
        assert.equal(translate('hello'), '.... . .-.. .-.. ---');
    });

    it('Translates the string "Hello World" into Morse Code', () => {
        assert.equal(translate('hello world'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('All special characters are removed', () => {
        assert.equal(translate(
            '§±!@£$%^&*()_-+=¡€#¢∞hello world§¶•ªº[]{}\'<>,.`~"?'),
            '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Uppercase letters are converted to lowercase', () => {
        assert.equal(translate('HELLO WORLD'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });

    it('Translate the string "1234567890" into Morse Code', () => {
        assert.equal(translate('1234567890'), '.---- ..--- ...-- ....- ..... -.... --... ---.. ----. -----');
    });

    it('Multiple spaces are removed', () => {
        assert.equal(translate('HELLO     WORLD'), '.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
    });
});
