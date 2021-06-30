// const ArrayGenerator = require('../util/ArrayGenerator')
var ArrayGenerator = require('../util/ArrayGenerator');
var SeleciontSort = /** @class */ (function () {
    function SeleciontSort() {
    }
    /**
     * 从小到大排序
     * @param {Array<any>} data
     *
     */
    SeleciontSort.sort = function (data) {
        for (var i = 0; i < data.length - 1; i++) {
            var minIndex = i;
            for (var j = i; j < data.length; j++) {
                if (data[j] < data[minIndex]) {
                    minIndex = j;
                }
            }
            this.swap(data, i, minIndex);
        }
        return data;
    };
    /**
     * 交换数组字段顺序
     */
    SeleciontSort.swap = function (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    return SeleciontSort;
}());
var data = [6, 3, 2, 1, 5, 7];
console.log(SeleciontSort.sort(data));
