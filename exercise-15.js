function groupAnimals(animals) {
    animals.sort();
    var arrAnimal = [];

    // Versi Efisien
    // var awal = animals[0][0];
    // var arrK = []
    // for (var i=0; i<animals.length; i++) {
    //     if(awal==animals[i][0]) {
    //         arrK.push(animals[i]);
    //     }else {
    //         arrAnimal.push(arrK);
    //         arrK = [];
    //         arrK.push(animals[i]);
    //         awal = animals[i][0]; 
    //     }
    // }
    // arrAnimal.push(arrK);
    // return arrAnimal;

    // --------------------------

    //Versi FAIP MARDONI
    for (var i=0; i<animals.length; i++) {
        var arrK = [];
        console.log(animals)
        if(animals[i-1]==undefined) {
            arrK.push(animals[i])  
            for (var j=i+1; j<animals.length; j++) {
                if(animals[i][0]===animals[j][0]) {
                    arrK.push(animals[j]);                    
                }    
            }
            arrAnimal.push(arrK);
            
        }else if (animals[i][0]!==animals[i-1][0]) {
            arrK.push(animals[i])  
            for (var j=i+1; j<animals.length; j++) {
                if(animals[i][0]===animals[j][0]) {
                    arrK.push(animals[j]);                 
                }
            }
            arrAnimal.push(arrK);
        }
    }
    return arrAnimal;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'kucing']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'foo', 'bar', 'foobar']))