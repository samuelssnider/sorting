function mergeSort(input){
  var split = []
  for(var i = 0; i < input.length; i += 2){
    if(input[i+1]){
      split.unshift([input[i], input[i + 1]]);
    }
    else{
      split.unshift([input[i]]);
    }
  }
  
  for(var j = 0; j < split.length; j ++){
    if(split[j][1]){
      if(split[j][0] > split[j][1]){
        save = split[j][0];
        split[j][0] = split[j][1];
        split[j][1] = save;
      }
    }
  }
  
  return split
}

module.exports = mergeSort