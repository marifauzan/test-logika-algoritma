function deretFibonacci(n) {
  let deret = [];

  if (n <= 0) {
    return deret;
  } else if (n === 1) {
    deret.push(0);
    return deret;
  } else if (n === 2) {
    deret.push(0, 1);
    return deret;
  } else {
    deret.push(0, 1);
    for (let i = 2; i < n; i++) {
      let angka = deret[i - 1] + deret[i - 2];
      deret.push(angka);
    }
    return deret;
  }
}

const jumlahAngka = 10; // input user
const fibonacci = deretFibonacci(jumlahAngka + 1);
let result = [];

for (let i = 1; i < fibonacci.length; i++) {
  result.push(fibonacci[i] - 1);
}

console.log("Deret Fibonacci", jumlahAngka, "angka:");
console.log(result.join(" "));
