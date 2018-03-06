var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

var ket = ['Nomor ID: ','Nama Lengkap: ','TTL: ',' ','Hobi: '];

function dataHandling(input,ket) {
    var biodata = '';
    for (i=0; i<input.length; i++) {
        for (j=0; j<=input.length; j++) {
            if(j==2) {
                biodata+=ket[j];
                biodata+=input[i][j];
                biodata+=' ';
            }else if(j==3) {
                biodata+=input[i][j];
                biodata+='\n';
            }else {
            biodata+=ket[j];
            biodata+=input[i][j];
            biodata+='\n';
            }
        }biodata+='\n'


    }
    return biodata;
}

console.log(dataHandling(input,ket));