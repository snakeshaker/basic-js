import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let max = 0;  
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        let tmp = this.calculateDepth(arr[i]);
        if(tmp > max) {
          max = tmp;
        }
      }
      return max + 1;   
    } else return 0;  
  }
}
