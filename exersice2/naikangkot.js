console.log('Exersice 2 - Naik Angkot \n');

//Definisikan fungsi

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var obj= {};
    var newArr = [];
    var indexAwal = 0;
    var indexAkhir = 0;
    var biaya = 0;

    if(arrPenumpang.length >0){
        for(var i = 0; i<arrPenumpang.length;i++){
            obj['penumpang'] = arrPenumpang[i][0];
            obj['naikDari'] = arrPenumpang[i][1];
            obj['tujuan'] = arrPenumpang[i][2];
    
            //Cek posisi awal dan akhir
            for(var j = 0; j<rute.length;j++){
                //Posisi awal
                if(rute[j]===arrPenumpang[i][1]){
                    indexAwal = j;
                }
    
                //Posisi akhir
                if(rute[j]===arrPenumpang[i][2]){
                    indexAkhir = j;
                }
    
                //Jarak dan biaya
                biaya = (indexAkhir-indexAwal)*2000;
                // console.log(biaya);
            }
            obj['bayar'] = biaya;
    
            newArr.push(obj);
            obj = {}; // empty the object    
        }
    }else{
        return '[]'
    }
    return newArr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]