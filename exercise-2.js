function balikString(str) {
    var strReverse = '';
    for (i=str.length-1; i>=0; i--) {
        strReverse+=str[i];
    }
    return strReverse;
}

console.log(balikString('hello world'));