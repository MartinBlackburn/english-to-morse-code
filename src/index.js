import morse from './morse';

export default (str) => {
    let chars = str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/  +/g, ' ')
        .split(''),
        morsecode = [];

    chars.map(char => {
         morsecode.push(morse[char].join(''));
    });
    return morsecode.join(' ');
};
