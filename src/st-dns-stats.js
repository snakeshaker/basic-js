import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.').reverse();
    let result = '';
    for (let j = 0; j < arr.length; j++) {
      result += `.${arr[j]}`;
      if (!obj[result]) {
        obj[result] = 1;
      } else {
        obj[result] += 1;
      }
    }
  }
  return obj;
}
