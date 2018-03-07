function angkaPalindrome(num) {
    function balikAngka(num) {
        var numPalindrome = ''; 
        var x = num.toString();
        for(var i=x.length-1; i>=0; i--) {
            numPalindrome+=x[i];
        }
        return numPalindrome;
    }
    var numString=num.toString();
    var stringBalikAngka=balikAngka(num);
    if(numString!=stringBalikAngka) {
        while(num!=numBalikAngka) {
            num++;
            var numBalikAngka = Number(balikAngka(num));
        }
    } else {
        num++

    }
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001