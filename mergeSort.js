function mergeSort(input){
  var split = []
  for(var i = 0; i < input.length; i += 2){
    if(input[i+1]){
      split.push([input[i], input[i + 1]]);
    }
    else{
      split.push([input[i]]);
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
  rebuild = []
  // while(rebuild.length < 1){
    middle = Math.ceil(split.length / 2);
    // console.log(middle);
    if(input.length % 2 == 0){
      for(var k = 0; k < (split.length - 1); k += 2){
        if(split[k][0] > split[k + 1][0]){
          rebuild.push(split[k + 1][0]);
        }
      }
    }
    else{
    }
  // }
  return rebuild;
}

module.exports = mergeSort