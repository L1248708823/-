const ArrayGenerator = require('../util/ArrayGenerator').ArrayGenerator
class LinearSearch {
  
  // 不允许编译
  private constructor() {

  }
  /**
   * 
   * @param {Array} data  数组
   * @param {any} target  目标值
   */
  static search<T extends {length: number}, J = any>(data:T, target:J ) {
    for(let i = 0; i < data.length; i++) {
      if(data[i] === target) {
        return i
      }
    }
    return -1
  }
}
console.log(ArrayGenerator.generatorArray);
const linearData = ArrayGenerator.generatorArray(10000000)

console.log(new Date().getTime()/1000/1000/1000);
console.log(LinearSearch.search<Array<number>>(linearData,999999));
console.log(new Date().getTime()/1000/1000/1000);