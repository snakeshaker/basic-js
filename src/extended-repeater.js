import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let arr = [];
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    if (str === null) {
      arr.push('null');
    } else arr.push(str);
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      if (options.addition === null) {
        arr.push('null');
      } else arr.push(options.addition);
      if(j != options.additionRepeatTimes - 1) {
        arr.push(options.additionSeparator);
      }
    }
    if(i != options.repeatTimes - 1) {
      arr.push(options.separator);
    }
  }
  return arr.join('');
}
