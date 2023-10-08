function buatDeretAngka(jumlahAngka) {
  let deret = [];
  let angkaSebelumnya = 1;
  let i = 1;

  while (deret.length < jumlahAngka) {
    if (i % 2 !== 0) {
      deret.push(angkaSebelumnya);
      angkaSebelumnya += i;
    }
    i++;
  }

  return deret;
}

const jumlahAngka = parseInt(10); // input user
const deret = buatDeretAngka(jumlahAngka);
console.log("Deret angka:");
console.log(deret.join(" "));
