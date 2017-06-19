// Input: Array of integers
// Output: A single integer
function max_int(intArr) {
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

// Input: string
// Output: number of vowels in the string
function vowel_count(str) {
  var vowels = 'AEIOUaeiou';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]))
    {
      count += 1;
    }
  }
  return count;
}

// Input: string
// Output: string but backwards
function reverse(str) {
  var new_string = '';
  for (var i = str.length - 1; i >= 0; i--) {
    new_string += str[i];
  }
  return new_string;
}
