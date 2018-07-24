console.log('Exersice 7 - Hapus Simbol\n');

//Definisikan Fungsi
function hapusSimbol(str) {
    str = str.match(/[a-z0-9]+/g);
    
    var newStr = '';

    for(var i = 0;i<str.length;i++){
        newStr = newStr+str[i];
    }
    return newStr;
}

//Test Case
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100