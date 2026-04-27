class Solution {
  /**
   * @param {number[][]} matrix
   * @return {void}
   */
  setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rowsToBeZeroed = new Set();
    const colsToBeZeroed = new Set();

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === 0) {
          rowsToBeZeroed.add(i);
          colsToBeZeroed.add(j);
        }
      }
    }

    for (const r of rowsToBeZeroed) {
      for (let j = 0; j < cols; j++) {
        matrix[r][j] = 0;
      }
    }

    for (const c of colsToBeZeroed) {
      for (let i = 0; i < rows; i++) {
        matrix[i][c] = 0;
      }
    }

    return matrix;
  }
}
