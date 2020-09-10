let array = [3,6,15,34,65,9]

let quicksort = (arr) => {
  if(arr.length <= 1){
    return arr
  }
  let pivot = arr[Math.floor(arr.length/2)], left = [], right = []
  for(var i =0; i < arr.length; i++){
    if(i === Math.floor(arr.length/2)) continue;
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let sorted = quicksort(left).concat(pivot, quicksort(right))
  return sorted;
}

console.log(quicksort(array))