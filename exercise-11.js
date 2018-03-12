function tentukanDeretAritmatika(arr) {
    var deret = []
    for (var i=arr.length-2; i>0; i--) {
        deret.push(arr[arr.length-1]-arr[arr.length-2]===arr[i]-arr[i-1])
        deret.sort()
        console.log(deret)
    }
    return deret[0]==true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
