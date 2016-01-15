function getWinner() {
  var cellsAll = document.querySelectorAll('.cell');
  var sqr = Math.sqrt(cellsAll.length);
  var row = [];
  var winInRow = 3;

  Array.prototype.equalsArr = function () {
    for (var i = 1; i < this.length; i++) {
      if (this[i] !== this[0]) return false;
    }
    return true;
  };

  for (var i = 0; i < cellsAll.length; i++) {
    if (cellsAll[i].classList.contains('x') || cellsAll[i].classList.contains('o')) {

      // Горизонтальный прогон
      for (var j = i; j < i + winInRow; j++) {
        if (cellsAll[j]) row.push(cellsAll[j].className);
      }
      if (row.equalsArr() && row.length == winInRow && i % sqr + winInRow <= sqr) {
        return row[0].substr(row[0].length - 1);
      } else row = [];

      // Вертикальный прогон
      for (var k = i; k <= i + sqr * 3; k += sqr) {
        if (cellsAll[k]) row.push(cellsAll[k].className);
      }
      if (row.equalsArr() && row.length == winInRow) {
        return row[0].substr(row[0].length - 1);
      } else row = [];

      // Диагональный прогон -\
      for (var l = i; l <= i + sqr * 3 + winInRow; l += sqr + 1) {
        if (cellsAll[l]) row.push(cellsAll[l].className);
      }
      if (row.equalsArr() && row.length == winInRow) {
        return row[0].substr(row[0].length - 1);
      } else row = [];

      // Диагональный прогон -/
      for (var m = i; m <= i + sqr * 3; m += sqr - 1) {
        if (cellsAll[m]) row.push(cellsAll[m].className);
      }
      if (row.equalsArr() && row.length == winInRow) {
        return row[0].substr(row[0].length - 1);
      } else row = [];
    }
  }
}