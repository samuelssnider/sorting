function bubbleSort(input) {
  function sort(intake){
    for(var i = 0; i < intake.length; i++){
      if(intake[i] > intake[i + 1]){
        var save = intake[i];
        intake[i] = intake[i + 1];
        intake[i + 1] = save;
      }
    }
    return save;
  }
  for(var j = 0;j < input.length; j++){
    sort(input);
  }
  return input
};

module.exports = bubbleSort