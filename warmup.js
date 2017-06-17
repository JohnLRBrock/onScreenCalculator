// Input: Array of integers
// Output: A single integer

function maxInt(intArr) {
  if (intArr.length === 0){
    return null;
  }
  var max = intArr[0];
  for (var i=1; i < intArr.length; i++){
    if (intArr[i] > max) {
      max = intArr[i];
    }
  }
  return max;
}

