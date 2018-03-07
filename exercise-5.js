function palindrome(kata) {
    // you can only write your code here!
    var kataPalindrome = '';
    for(i=kata.length-1; i>=0; i--) {
        kataPalindrome+=kata[i];
    }
    
    return kata === kataPalindrome;
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false