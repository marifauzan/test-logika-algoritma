function countCharacters(input) {
  // Simpan hasil perhitungan
  const characterCount = {};

  for (let i = 0; i < input.length; i++) {
    const character = input[i];

    // Cek apakah karakter sudah ada dalam objek characterCount
    if (characterCount[character]) {
      // Tambahkan 1 ke jumlahnya
      characterCount[character]++;
    } else {
      // Inisialisasi dengan 1
      characterCount[character] = 1;
    }
  }

  return characterCount;
}

const inputString = "aabbbahwws";
const result = countCharacters(inputString);

// Tampilkan hasilnya
for (const character in result) {
  console.log(`${character} = ${result[character]}`);
}
