import morse from './morse';

export default {
    translate(str) {
        let chars = str
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .split(''),
            morsecode = [];
            
        chars.map(char => {
            if (char == ' ') {
                morsecode.push(morse.space.join(''));
            } else {
                morsecode.push(morse[char].join(''));
            }
        });

        return morsecode.join(' ');
    }
};
