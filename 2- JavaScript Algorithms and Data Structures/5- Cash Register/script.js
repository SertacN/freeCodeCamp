function checkCashRegister(price, cash, cid) {
  // Para birimleri
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 },
  ];

  // Para iadesi, iade bilgisi, kasa içindeki toplam para miktarı
  let changeDue = cash - price;
  const change = { status: "", change: [] };
  let totalAvailable = 0;

  // Kasa içindeki toplam para miktarı
  for (const [, amount] of cid) {
    totalAvailable += amount;
  }

  // Kasa içindeki toplam miktar, müşterinin ödemesinden fazlaysa "CLOSED"
  if (totalAvailable === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Kasa içindeki toplam miktar, müşterinin ödemesinden azsa "INSUFFICIENT_FUNDS"
  if (totalAvailable < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // En büyük para biriminden başla
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    // Mevcut para biriminin adı ve değeri
    const { name, value } = currencyUnits[i];
    // Kasa içinde bu para biriminden kaç birim var
    const available = cid[i][1];

    // Eğer iade edilmesi gereken miktar, bu para biriminin değerinden büyük ve elimizde bu birimden varsa
    if (changeDue >= value && available > 0) {
      // İade edilecek miktarı hesapla, bu birimden kullanılan miktarı çıkart
      const used = Math.min(changeDue - (changeDue % value), available);
      change.change.push([name, used]);
      changeDue -= used;
      // Kesirli sayı olmaması lazım
      changeDue = Number(changeDue.toFixed(2));
    }
  }

  // Eğer iade edilemeyen bir miktar varsa "INSUFFICIENT_FUNDS"
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // İade işlemi başarılıysa durumu "OPEN"
  return { status: "OPEN", change: change.change };
}
