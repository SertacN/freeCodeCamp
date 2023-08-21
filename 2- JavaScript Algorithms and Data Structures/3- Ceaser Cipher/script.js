const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  let rot = 13;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    debugger;
    let char = str[i];
    if (char.match(/[A-Z]/)) {
      // Büyük harf kontrolü sağlanıyorsa.
      let currentIndex = alphabet.indexOf(char); // ilk harf, alphabet'in kaçıncı indexinde onu bul.
      let newIndex = (currentIndex + rot) % 26; // yeni index= o anki index değeri + kaydırma miktarının 26 ya bölümümnden kalan.
      // 26'ya böl çünkü alphabet değişkeni 26 length uzunluğunda.
      if (newIndex < 0) {
        newIndex += 26; // Negatif sayı gelirse 26 ekleki pozitife dönüşsün. 26 harf olduğu için.
      }
      result += alphabet[newIndex]; // sonuca 13 kaydırmalı halini ekle.
    } else {
      result += char; // Boşluk ekmek için hiç bir koşul uymuyorsa.
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
