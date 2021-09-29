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
  let res = 0;
  let number = String(n).split('');
  for (let i = 0; i < number.length; i++) {
    number.splice(i, 1);
    if (Number(number.join('')) > res) {
      res = Number(number.join(''));
    }
    number = String(n).split('');
  }
  return res;
}
