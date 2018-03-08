function targetTerdekat(arr) {
    // you can only write your code here!
    var arrO = [];
    var arrX = [];
    var arrTerdekat = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]==='x') {
            arrX.push(i);
        }else if(arr[i]==='o') {
            arrO.push(i);
        }else {
            continue;
        }
    }
    if (arrX.length === 0 || arrO.length === 0) {
        arrTerdekat.push(0) 
    } else {
        for(i=0; i<arrX.length; i++) {
            arrTerdekat.push(Math.abs(arrO[0]-arrX[i]));
        }
    }
    arrTerdekat.sort()
    return arrTerdekat[0];

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2