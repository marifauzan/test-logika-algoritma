function buatDeretAngka(jumlahAngka) {
  let deret = [];

  for (let i = 1; i <= jumlahAngka; i++) {
    deret.push(i ** 2);
  }

  return deret;
}

const jumlahAngka = parseInt(10); // input user
const deret = buatDeretAngka(jumlahAngka);
console.log("Deret angka:");
console.log(deret.join(" "));
