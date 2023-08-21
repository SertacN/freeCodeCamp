// Referans sayılar
const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
console.log(romanNumerals["M"]);
// Fonksiyona yollanan sayıyı, referans sayılarında dönerek döngü oluşturmak lazım.
// En büyük sayıdan küçüğe doğru test etmesi gerek.
// 36 sayısı romanNumerals'daki referanslardan büyük olana kadar devam etmeli
// 36 > 10 olduğu için ilk roma rakamı X ve bu bir değişkende tutulmalı.
// 36 sayısı doğru key sayısından çıkarılarak değeri azalmalı.
// 36 - 10 = 26 : yeni değer 26. 26 sayısı 10(key)'dan büyük olduğu için tekrar result değişkenine X eklenir.
// 26 - 10 = 16 : X, 6 sayısı 10 dan büyük olmadığı için tekrar test eder. 6 > 5 olduğunda bir sonraki rakam V
// 6-5 = 1. yeni değer.
// 1 > 0 ve key değeri I. sonuç XXXVI olmalı.

function convertToRoman(num) {
  let result = "";
  // for...in kullan. key in değeri.
  for (const key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}
console.log(convertToRoman(36)); // XXXVI
