'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _morse = require('./morse');

var _morse2 = _interopRequireDefault(_morse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (str) {
    var chars = str.toLowerCase().replace(/[^A-Za-z\s]/g, '').replace(/  +/g, ' ').split(''),
        morsecode = [];

    chars.map(function (char) {
        morsecode.push(_morse2.default[char].join(''));
    });
    return morsecode.join(' ');
};