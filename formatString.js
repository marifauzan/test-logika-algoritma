function formatString(input) {
  // Hapus karakter non-huruf dan non-angka dengan reguler expression
  const formattedString = input.replace(/[^a-zA-Z0-9\s]/g, "");

  // Konversi setiap kata dalam string menjadi format judul
  const titleCaseString = formattedString
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Mengganti spasi dengan strip ("-")
  const dashedString = titleCaseString.replace(/\s+/g, "-");

  return {
    titleCase: titleCaseString,
    dashed: dashedString,
  };
}

const inputString = "SELamAt PaGi Dunia!!";
const result = formatString(inputString);

console.log("Hasil format judul:", result.titleCase);
console.log("Hasil format strip:", result.dashed);
