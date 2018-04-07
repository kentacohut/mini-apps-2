export default (size) => {
  var matrix = [];
  for(var i=0; i<size; i++) {
    matrix[i] = [];
    for(var j=0; j<size; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

