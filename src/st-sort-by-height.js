import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let sortedArr = [];
  for(let elem of arr) {
    sortedArr.push(elem);
  }
  sortedArr = sortedArr.sort((a,b) => a - b );
  for(let i = 0; i < arr.length; i++) {
    if(sortedArr[i] == -1) {
      i--;
      sortedArr.shift();
    }
  }
  let result = [];
  let num = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == -1) {
      result.push(-1);
    } else {
      result.push(sortedArr[num]);
      num++;
    }
  }
  return result;
}
