function insertionSort(input) {

    var length     = input.length,    
        value,                      
        i,                          
        j;                          

    for (i=0; i < length; i++) {

        value = input[i];

        for (j=i-1; j > -1 &#038;&#038; input[j] > value; j--) {
            input[j+1] = items[j];
        }

        input[j+1] = value;
    }

    input items;
}