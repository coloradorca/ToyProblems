let array = [84,36,7,21,34,67]

let insertionSort = (arr) => {
  for(var i = 0; i < arr.length-1; i++){
    //get the current element
    let val = array[i];
    let hole = i;
    //find the insertion point
    while(hole && val < arr[hole-1]){
      arr[hole] = array[hole-1];
      hole -= 1;
    }
    //insert the element
    array[hole] = val;
    }

  return arr
}

console.log(insertionSort(array))