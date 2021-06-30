var ArrayGenerator = require('../util/ArrayGenerator').ArrayGenerator;
var LinearSearch = /** @class */ (function () {
    // 不允许编译
    function LinearSearch() {
    }
    /**
     *
     * @param {Array} data  数组
     * @param {any} target  目标值
     */
    LinearSearch.search = function (data, target) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] === target) {
                return i;
            }
        }
        return -1;
    };
    return LinearSearch;
}());
console.log(ArrayGenerator.generatorArray);
var linearData = ArrayGenerator.generatorArray(10000000);
console.log(new Date().getTime() / 1000 / 1000 / 1000);
console.log(LinearSearch.search(linearData, 999999));
console.log(new Date().getTime() / 1000 / 1000 / 1000);
