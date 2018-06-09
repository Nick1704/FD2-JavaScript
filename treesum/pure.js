"use strict";
let arr = [5, 7,
	[4, [2], 8, [1, 3], 2],
	[9, []],
	1, 8
];
function treeSum(arr) {
 let numbers = 0;
 treeSum1(arr);
 function treeSum1(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       treeSum1(arr[i]);
     } else {
       numbers += arr[i];
     }
   }
 }
 return numbers;	
}

console.log(treeSum(arr));
