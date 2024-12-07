const { db } = require("../../../db");
const common = require("../../../common");

module.exports = async ({ body }) => {
  const { contract_id, pay } = body;

  // Shartnoma mavjudligini tekshirish
  const existed = await common.checkings.found(
    "contract",
    { id: contract_id },
    "Shartnoma"
  );

  if (!existed) {
    throw new Error("Shartnoma topilmadi!");
  }

  // Yangi oylik to'lovni qo'shish
  const newPayment = {
    ...body,
    id: existed.oylik_tulovlar.length + 1, // To'lov ID'si
    date: new Date().toISOString(), // Sana qo'shiladi
  };

  // Oylik to'lovlar ro'yxatiga yangi to'lovni qo'shish
  existed.oylik_tulovlar.push(newPayment);

  // Yangilangan qiymatlar
  const qolganSumma = existed.qolgan_summa - pay;
  const umumiyTulanganSumma = existed.umumiy_tulangan_summa + pay;

  // Ma'lumotlarni yangilash uchun tayyorlash
  const updatedContract = {
    qolgan_summa: qolganSumma,
    umumiy_tulangan_summa: umumiyTulanganSumma,
    oylik_tulovlar: JSON.stringify(existed.oylik_tulovlar), // JSON string formatida saqlash
  };

  // Ma'lumotlarni yangilash
  await db("contract").where({ id: contract_id }).update(updatedContract);

  // Natijani qaytarish
  return {
    message: "Oylik to'lov muvaffaqiyatli qo'shildi",
    updatedContract,
  };
};
