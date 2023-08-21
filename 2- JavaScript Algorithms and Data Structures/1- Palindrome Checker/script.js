function palindrome(str) {
  // Alfanumerik olmayan karakterleri çıkar(., boşluk gibi) yerine "" hiçbir şey koyma.
  // replace metoduyla boşluklar,noktalama işaretlerini kaldır.
  // toLowerCase() ile fonksiyona yollanan string ifadenin tamamını küçük harfe çevir.
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanStr); // racecar

  // fonksiyona gelen string ifade alfanümerik olmayan karakterlerden temizlendikten sonra
  // Temizlenen string ifadenin, bu ifadenin ters dönmüş haline eşit olması gerekir.
  // split("") metoduyla değişkeni karakter dizisine çevir. ["r","a","c","e","c","a","r"]
  // reverse() ile bu karakter dizisini tersine çevir.
  // join ile karakter dizisini tekrar birleştirir. // racecar
  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(palindrome("racecar")); // true
console.log(palindrome("RaceCar")); // true
console.log(palindrome("race CAR")); // true
console.log(palindrome("2A3*3a2")); // true
console.log(palindrome("2A3 3a2")); // true
console.log(palindrome("2_A3*3#A2")); // true
console.log(palindrome("hello")); // false
console.log(palindrome("Palindrome")); // false
