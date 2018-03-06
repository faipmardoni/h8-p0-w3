var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
var modify = ['Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','Pria','SMA Internasional Metro'];

function dataHandling2(input) {
    var x=0;
    for (var i=1;i<=5;i++) {
        if(i==3) {
            continue;
        }else {
            input.splice(i,1,modify[x]);
        }
        x++;
    }
    console.log(input);
    var date=input[3].split('/');
    switch (date[1]) {
        case '01':
            month='Januari';
            break;
        case '02':
            month='Februari';
            break;
        case '03':
            month='Maret';
            break;
        case '04':
            month='April';
            break;
        case '05':
            month='Mei';
            break;
        case '06':
            month='Juni';
            break;
        case '07':
            month='Juli';
            break;
        case '08':
            month='Agustus';
            break;
        case '09':
            month='September';
            break;
        case '10':
            month='Oktober';
            break;
        case '11':
            month='November';
            break;
        case '12':
            month='Desember';
            break;
    }
    console.log(month);
    var tanggal = [Number(date[0]),Number(date[1]),Number(date[2])];
    var tanggalSort = tanggal.sort(function (value1,value2) {
        return value1<value2
    });
    console.log(tanggalSort);
    var dateJoin= date.join('-')
    console.log(dateJoin);
    var name = input[1].split('');
    var nameSlice = name.splice(0,15);
    var nameJoin = nameSlice.join('');
    console.log(nameJoin);
    return input;
}

dataHandling2(input);