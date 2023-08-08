const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan panjang substring: ", (length) => {
            // Konversi nilai indeks dan panjang ke tipe Number
            startIndex = Number(startIndex);
            length = Number(length);
            // Gunakan method substr untuk mengambil substring dari startIndex dengan panjang length
            const substringResault = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: {substringResault}`);
            rl.close();
        });
    });
});