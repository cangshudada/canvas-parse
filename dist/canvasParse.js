!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.canvasParse=t():e.canvasParse=t()}(window,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n={getArcPoint:o.getArcPoint,ellipse2point:o.ellipse2point,BezierCurve2point:o.BezierCurve2point};t.default=n},function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.getArcPoint=n.getArcPoint;var i=r(3);t.ellipse2point=i.ellipse2point;var u=o(r(4));t.BezierCurve2point=u.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getArcPoint=function(e,t,r,o){void 0===t&&(t=5),void 0===r&&(r=0),void 0===o&&(o=0);for(var n=Math.abs(t),i=Math.floor(360/n),u=[],a=n,f=0;f<i;f++){var s=a*(f+1),c=Math.sqrt(Math.pow(e,2)*(1-Math.pow(Math.sin(s*Math.PI/180),2))),p=Math.sqrt(Math.pow(e,2)*(1-Math.pow(Math.cos(s*Math.PI/180),2)));s<=90&&0<s?u.push({x:r+c,y:o+p}):s>90&&s<=180?u.push({x:r-c,y:o+p}):s>180&&s<=270?u.push({x:c===r?r:r-c,y:o-p}):s>270&&s<=360&&u.push({x:r+c,y:p===o?o:o-p})}return u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ellipse2point=function(e,t,r,o,n){if(void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=1),n<=0)throw Error("pointDensity cannot be 0 or negative");var i=-r,u=[];!function e(){var t,a;i<=r&&(t=i,a=Math.sqrt(1-Math.pow(i/r,2))*-o,i+=n,isNaN(t)||isNaN(a)||u.push({x:t,y:-0===a?0:a}),e())}();var a=JSON.parse(JSON.stringify(u));return a.forEach((function(e){e.y=0===e.y?0:-e.y})),(u=u.concat(a.reverse())).forEach((function(r){r.x+=e,r.y+=t})),u}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.getBezierCurvePoint=function(e,t,r,o,n){void 0===e&&(e=180);var i=[];return o||n?o&&!n?i=this.twoBezierParse(e,t,r,o):o&&n&&(i=this.threeBezierParse(e,t,r,o,n)):i=this.oneBezierParse(e,t,r),i.push(r),i},e.prototype.oneBezierParse=function(e,t,r){for(var o=[],n=0;n<e;n++){var i=n/e;o.push({x:t.x+(r.x-t.x)*i,y:t.y+(r.y-t.y)*i})}return o},e.prototype.twoBezierParse=function(e,t,r,o){for(var n=[],i=0;i<e;i++){var u=i/e;n.push({x:(1-u)*(1-u)*t.x+2*u*(1-u)*o.x+u*u*r.x,y:(1-u)*(1-u)*t.y+2*u*(1-u)*o.y+u*u*r.y})}return n},e.prototype.threeBezierParse=function(e,t,r,o,n){for(var i=[],u=0;u<e;u++){var a=u/e,f=t.x*(1-a)*(1-a)*(1-a)+3*o.x*a*(1-a)*(1-a)+3*n.x*a*a*(1-a)+r.x*a*a*a,s=t.y*(1-a)*(1-a)*(1-a)+3*o.y*a*(1-a)*(1-a)+3*n.y*a*a*(1-a)+r.y*a*a*a;i.push({x:f,y:s})}return i},e}();t.default=o}]).default}));