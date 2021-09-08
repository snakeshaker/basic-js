import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let num = String(n).split('');
  let arr = String(n);
  arr = arr.split('').sort((a,b) => a - b);
  for(let i = 0; i < arr.length; i++) {
    if(arr[0] == num[i]) {
      num[i] = '';
      break;
    }
  }
  return +num.join('');
}
