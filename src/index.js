"use strict";

class MorseCodeTranslator
{
    /**
     * Constructor: setup character to morse code map
     */
    constructor() {
        this._morse = {
            a: [".","-"],
            b: ["-",".",".","."],
            c: ["-",".","-","."],
            d: ["-",".","."],
            e: ["."],
            f: [".",".","-","."],
            g: ["-","-","."],
            h: [".",".",".","."],
            i: [".","."],
            j: [".","-","-","-"],
            k: ["-",".","-"],
            l: [".","-",".","."],
            m: ["-","-"],
            n: ["-","."],
            o: ["-","-","-"],
            p: [".","-","-","."],
            q: ["-","-",".","-"],
            r: [".","-","."],
            s: [".",".","."],
            t: ["-"],
            u: [".",".","-"],
            v: [".",".",".","-"],
            w: [".","-","-"],
            x: ["-",".",".","-"],
            y: ["-",".","-","-"],
            z: ["-","-",".","."],
            1: [".","-","-","-","-"],
            2: [".",".","-","-","-"],
            3: [".",".",".","-","-"],
            4: [".",".",".",".","-"],
            5: [".",".",".",".","."],
            6: ["-",".",".",".","."],
            7: ["-","-",".",".","."],
            8: ["-","-","-",".","."],
            9: ["-","-","-","-","."],
            0: ["-","-","-","-","-"],
            space: ["/"]
        };
    }

    /**
     * Translate a string of english to a string of morse code
     * @param  {string} value
     * @return {string}
     */
    translate(value)
    {
        let chars = value
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .split(''),
            morsecode = [];

        for(let i = 0; i < chars.length; i++) {
            if(chars[i] == ' '){
                morsecode.push(this._morse.space.join(''));
            } else {
                morsecode.push(this._morse[chars[i]].join(''));
            }
        }

        return morsecode.join(' ');
    }
}
