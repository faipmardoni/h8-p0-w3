function pasanganTerbesar(num) {
    // // you can only write your code here!
    var numtoStr = num.toString();
    var arrStr = '';
    var j=0;
    for (i=0; i<numtoStr.length; i++) {
        j++
        arrStr+=numtoStr[i]
        arrStr+=numtoStr[j]
        arrStr+=','
    }
    var numPair = arrStr.split(',');
    numPair.pop()
    numPair.sort(function(value1,value2){return value1<value2});
    return Number(numPair[0]);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99