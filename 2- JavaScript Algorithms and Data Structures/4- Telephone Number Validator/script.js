// başlangıçta 1 veya 1 boşluk olacak şekilde olmalı.1 ile başlamasada olur. ^(1\s?)?
// 0-9 arası 3 adet sayı gelmeli.\d{3}
// - olabilir veya olmayabilir -?, boşluk olabilir veya olmayabilir \s?
// 0-9 arası 3 adet sayı gelmeli tekrar. \d{3}
// - olabilir veya olmayabilir -?, boşluk olabilir veya olmayabilir \s?
// 0-9 arası 4 adet sayı olmalı. \d{4}$

// 1 = ^(1\s?)?\d{3}-?\s?\d{3}-?\s?\d{4}$

// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// true dönmesi gerekirken false dönüyor. (555) parantezler eklenmeli.

// 2 = ^(1\s?)?\(\d{3}\)-?\s?\d{3}-?\s?\d{4}$
// (\d{3}\) = (555) parantezler eklenmiş hali.

// sonuç :  /^(1\s?)?\d{3}-?\s?\d{3}-?\s?\d{4}$|^(1\s?)?\(\d{3}\)-?\s?\d{3}-?\s?\d{4}$/g

function telephoneCheck(str) {
  return /^(1\s?)?\d{3}-?\s?\d{3}-?\s?\d{4}$|^(1\s?)?\(\d{3}\)-?\s?\d{3}-?\s?\d{4}$/g.test(
    str
  );
}

telephoneCheck("555-555-5555");
