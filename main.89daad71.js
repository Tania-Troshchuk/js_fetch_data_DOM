parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",t="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function e(n){return fetch(n).then(function(n){return n.ok||setTimeout(function(){return Promise.reject(new Error("".concat(n.status)))},5e3),n.json()})}var o=function(){return e(n).then(function(n){return n})};function c(n){var o=n.map(function(n){var o=n.id;return e("".concat(t).concat(o,".json"))});return Promise.all(o)}function r(n){document.body.insertAdjacentHTML("beforeend","\n    <ul>\n      ".concat(n.map(function(n){return"\n        <li>".concat(n.name,"</li>\n      ")}).join(""),"\n    </ul>\n  "))}o().then(c).then(r).catch(function(n){console.log(new Error(n))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.89daad71.js.map