const { db } = require("../../../db");
const common = require("../../../common");
const { formatmoney } = require("../../../shared/function");

module.exports = async ({ params }) => {
  let { id } = params;

  const exist = await common.checkings.found("contract", { id }, "Shartnoma");

  let { oylik_tulovlar: tulovlar, oyiga_qanchadan_tushadi: standart } = exist;

  let data = [];

  tulovlar.forEach((elem) => {
    let obj = {
      sana: `${elem.id} T`,
      tulov: elem.pay,
      belgilangan: standart,
    };
    data.push(obj);
  });

  return data;
};
