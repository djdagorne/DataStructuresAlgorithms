/*
Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/
function merge_arrays(arr1, arr2) {
	let i = 0, j = 0;
	let final = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]){
             final.push(arr1[i]);
             console.log(final, 'i==',i);
		}else{
             final.push(arr2[j]);
             console.log(final, 'j==',j);}
	}
	// One array is now empty. Join the rest of the other array on.
	if (j < arr2.length) {
        console.log('a2')
		i = j;
		arr1 = arr2;
	}
	while (i < arr1.length) {
        console.log('b2');
        final.push(arr1[i++]);}
	return final;
}

console.log(merge_arrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))