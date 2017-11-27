function insertionSort(input) {

    var length     = input.length,    
        value,                      
        i,                          
        j;                          

    for (i=0; i < length; i++) {

        value = input[i];

        for (j=i-1; j > -1 && input[j] > value; j--) {
            input[j+1] = input[j];
        }

        input[j+1] = value;
    }

    return input;
}
             
module.exports = insertionSort
