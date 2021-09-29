import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {

  const calc = (arr, x, y) => {
    return (y < 0 || y >= arr.length || x < 0 || x >= arr[0].length) ? 0 : 1;
  }


  let result = matrix.map(e => e.map(e => 0));

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true){
        if(calc(result, i - 1, j - 1))
          result[i - 1][j - 1]++;
        if(calc(result, i - 1, j))
          result[i - 1][j]++;
        if(calc(result, i - 1, j + 1))
          result[i - 1][j + 1]++;
        if(calc(result, i, j - 1))
          result[i][j - 1]++;
        if(calc(result, i, j + 1))
          result[i][j + 1]++;
        if(calc(result, i + 1, j - 1))
          result[i + 1][j - 1]++;
        if(calc(result, i + 1, j))
          result[i + 1][j]++;
        if(calc(result, i + 1, j + 1))
          result[i + 1][j + 1]++;
      }
    }
  }
  return result;
}
