import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i + 1] == arr[i]) {
      count++;
      arr.splice(i, 1);
      i--;
    } else {
      if(count != 1) {
        arr.splice(i, 0, count);
      }
      count = 1;
    }
  }
  return arr.join('');
}
