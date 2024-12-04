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

const formatmoney = (money) => {
  const formattedNumber = money.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return formattedNumber;
};

const formatDate = (time, sana = false) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  if (sana == true) {
    return `${year}-${month}-${day}`;
  } else {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
};

const addLeadingZero = (number) => {
  return number < 10 ? "0" + number : number;
};

module.exports = { findApartment, formatmoney, formatDate };
