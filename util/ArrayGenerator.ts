export class ArrayGenerator {
  static generatorArray(length:number): number[] {
     const arr = new Array<number>()
     for(let i = 0; i<length; i++) {
      arr.push(i)
     }
     return arr
  }
}

module.exports = ArrayGenerator
 