
// function argsCount() {
//   console.log('arrays length - ', arguments.length);

// }
// argsCount();
// argsCount(2);
// argsCount(3, 4, 5);


//   step 1

// const list = [2, 4, 6, 7, 9, 0, 10];

// function cutArray(arr, from, to){
//   if (arguments.length === 3) {
//     const newArray = [];
//     let counter = 0;
//     for(let i = from; i <= to; i++){
//       newArray[counter] = arr[i];
//       counter++;
//     }
//       return newArray;
//   }
// }

// console.log(list);
// console.log(cutArray(list, 1, 3));



//cutArray(list, 1)



//    step 2


const list = [2, 4, 6, 7, 9, 0, 10];

function cutArray(arr, from, to) {
if (isNaN(from) || isNaN(to)){
  return 'error!';
}
  if (arguments.length === 3) {
    const newArray = [];
    let counter = 0;
    for (let i = from; i <= to; i++) {
      newArray[counter] = arr[i];
      counter++;
    }
    return newArray;
  } else if (arguments.length === 2) {
    return arr[from];
  } else {
    return 'error!';
  }

}

console.log(list);
console.log(cutArray(list, 1, 3));
console.log(cutArray(list, 1));
console.log(cutArray(list));