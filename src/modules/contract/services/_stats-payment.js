const { db } = require("../../../db");
const common = require("../../../common");
const { formatmoney, formatDate } = require("../../../shared/function");

module.exports = async ({ params }) => {
  let { id } = params;

  const exist = await common.checkings.found("contract", { id }, "Shartnoma");

  let { oylik_tulovlar: tulovlar, oyiga_qanchadan_tushadi: standart } = exist;

  let data = [];

  tulovlar.forEach((elem) => {
    let obj = {
      raqam: elem?.id,
      tulov: elem?.pay,
      belgilangan: standart,
      sana: elem?.date,
      qolgan_summa: elem?.qolganSumma,
      standart: elem?.oylik_tushadigan_tulov_standart,
    };
    data.push(obj);
  });

  return data;
};
