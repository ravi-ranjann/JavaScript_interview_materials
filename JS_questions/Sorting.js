let arr = [2,5,1,3,7,4,9,8];
// arr.sort();
arr.sort((a,b)=> {return a - b});

// Sort an array of strings
arr = ["banana", "grapes", "peers", "apple", "Grapes", "Zebra", "elephant"];
arr.sort((a,b)=> {
let first = a.toLowerCase();
  	let second = b.toLowerCase();
  	if(first < second) {return -1;}
  	if(first > second) {return 1;}
  	return 0;
});

console.log(arr)


// -----------------------------------

function bubbleSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
	  for (let j = 0; j < n - i - 1; j++) {
		if (arr[j] > arr[j + 1]) {
		  // swap
		  let temp = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp;
		}
	  }
	}
	return arr;
  }
  
  // Example usage:
  console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
  