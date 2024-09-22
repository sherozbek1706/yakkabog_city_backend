const findApartment = (etaj, podyezd, xonaningetajdagiraqami) => {
  const etajdanechtaxonabor = 4;
  const podyezdaNechataEtajBor = 5;

  // Birinchi podyezdning birinchi kvartirasi raqami
  const startingApartment =
    (podyezd - 1) * etajdanechtaxonabor * podyezdaNechataEtajBor;

  // Umumiy kvartira raqami
  const apartmentNumber =
    startingApartment +
    (etaj - 1) * etajdanechtaxonabor +
    xonaningetajdagiraqami;

  return apartmentNumber;
};

module.exports = { findApartment };
