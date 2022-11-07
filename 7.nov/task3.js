var x= ["haya","marah","bayan","naqaa","zaina","aala","ali"]

   function shorterInArray(x){
    let min=x[0];
    for (let i=0;i<x.length;i++){
        if (x[i].length<min.length){
            min=x[i];
        }

    }
    return min;
}
document.write(shorterInArray(x));