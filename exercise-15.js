function groupAnimals(animals) {
    // you can only write your code here!
    var arrA = [];
    var arrC = [];
    var arrK = [];
    var arrAnimal = [];
    for(var i=0; i<animals.length; i++) {
        if(animals[i][0]==='a') {
            arrA.push(animals[i]);
        }else if (animals[i][0]==='c') {
            arrC.push(animals[i]);
        }else {
            arrK.push(animals[i]);
        }
    }
    arrAnimal.push(arrA,arrC,arrK);
    return arrAnimal;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]