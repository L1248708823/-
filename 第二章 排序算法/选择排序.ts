// const ArrayGenerator = require('../util/ArrayGenerator')
const ArrayGenerator = require('../util/ArrayGenerator')
class SeleciontSort {
  private constructor() {

  }
  /**
   * 从小到大排序
   * @param {Array<any>} data 
   * 
   */
  static sort(data) {
    for(let i = 0; i < data.length - 1; i++) {
      let minIndex = i
      for(let j = i; j < data.length; j++) {
        if(data[j] < data[minIndex]) {
          minIndex = j
        }
      }
      this.swap(data, i, minIndex)
    }
    return data
  }
  
  /**
   * 交换数组字段顺序
   */
  static swap(arr,i,j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}

 
const data = [6,3, 2,1,5,7]
console.log(SeleciontSort.sort(data));