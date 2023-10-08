function hitungStatistik(deretAngka) {
  // Split string berdasarkan koma atau spasi
  const angkaArray = deretAngka.split(/[,\s]+/).map(Number);

  if (angkaArray.length === 0) {
    return "Deret angka kosong";
  }

  const nilaiTerbesar = Math.max(...angkaArray);
  const nilaiTerkecil = Math.min(...angkaArray);
  const nilaiRataRata =
    angkaArray.reduce((total, angka) => total + angka, 0) / angkaArray.length;

  return {
    nilaiTerbesar,
    nilaiTerkecil,
    nilaiRataRata,
  };
}

const deretAngka = "20, 21, 80, 21, 55, 31, 22";
const statistik = hitungStatistik(deretAngka);

console.log("Nilai Terbesar:", statistik.nilaiTerbesar);
console.log("Nilai Terkecil:", statistik.nilaiTerkecil);
console.log("Nilai Rata-rata:", statistik.nilaiRataRata);
