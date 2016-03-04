import morse from './morse';

export default (str) => {
    let chars = str
        .toLowerCase()
        .replace(/[^A-Za-z\s]/g, '')
        .replace(/  +/g, ' ')
        .split(''),
        morsecode = [];

    chars.map(char => {
         morsecode.push(morse[char].join(''));
    });
    return morsecode.join(' ');
};
