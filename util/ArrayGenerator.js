"use strict";
exports.__esModule = true;
exports.ArrayGenerator = void 0;
var ArrayGenerator = /** @class */ (function () {
    function ArrayGenerator() {
    }
    ArrayGenerator.generatorArray = function (length) {
        var arr = new Array();
        for (var i = 0; i < length; i++) {
            arr.push(i);
        }
        return arr;
    };
    return ArrayGenerator;
}());
exports.ArrayGenerator = ArrayGenerator;
