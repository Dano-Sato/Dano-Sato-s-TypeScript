"use strict";
exports.__esModule = true;
exports.copyToClipboard = function (url) {
    document.addEventListener('copy', function (e) {
        e.clipboardData.setData('text/plain', url);
        e.preventDefault();
        document.removeEventListener('copy');
    });
    document.execCommand('copy');
};
