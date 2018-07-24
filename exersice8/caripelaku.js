console.log('Exersice 8 - Cari Pelaku\n');

//Definiskan Fungsi
function cariPelaku(str) {
    
    var abc = str.match(/abc/g);
    return abc.length;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2