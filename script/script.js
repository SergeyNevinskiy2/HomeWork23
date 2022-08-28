'use strict'
// 1
// const arr = [1,2,3];
// const arr2 = [3,4,5];
// const updateArr = arr.concat(arr2);
// console.log(updateArr)

// 2
// const arr = [1,2,3];
// arr.reverse();
// console.log(arr)

// 3
// const arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr)

// 4
// const arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr)

// 5
// const arr = ['js', 'css', 'jq'];
// console.log(arr.shift())

// 6
// const arr = ['js', 'css', 'jq']
// console.log(arr[arr.length-1])

// 7
// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.slice(0, 3);
// console.log(arr1);

// 8
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(-2);
// console.log(arr2)

//9
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//10
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.slice(1, 4);
// console.log(arr2);

//11
// const arr1 = [1, 2, 3, 4, 5];
// arr1.splice(3, 0, "a", "b", "c");
// console.log(arr1);

//12
// const arr1 = [1, 2, 3, 4, 5];
// arr1.splice(1, 0, "a", "b");
// arr1.splice(6, 0, "c");
// arr1.splice(8, 0, "e");
// console.log(arr1);

//13
//  const arr1 = [3, 4, 1, 2, 7];
// arr1.sort();
// console.log(arr1);

//14
// const arr1 = [5, 6, 7, 8, 9];
// const result = arr1.reduce((sum, current) => sum + current, 0);
// console.log(result);

// 15
// const arr1 = [5, 6, 7, 8, 9];
// const arr2 = arr1.map(arr1 =>  {
//   return Math.pow(arr1, 2);
// });
// console.log(arr2);

//16
// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const arr1 = arr.filter(function (x) {
//   return x < 0;
// });
// console.log(arr1);

//17
// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// const arr1 = arr.filter(function (x) {
//   return x % 2 === 0;
// });
// console.log(arr1);

//18
// const arr1 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// const arr2 = arr1.filter(function (item) {
//   if (item.length > 5) {
//     return item;
//   }
// });
// console.log(arr2);

//19
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const arr1 = arr.filter(Array.isArray);
// console.log(arr1);

//20
// const arr = [5, -3, 6, -5, 0, -7, -8, 9];
// const arr1 = arr.filter((item) => item < 0);
// console.log(arr1.length);