const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async ({ query }) => {
  const {
    block_number = "",
    entrance = "",
    is_sold,
    apartment_number,
    total_price,
  } = query;

  const list = db("apartment")
    .leftJoin("admin", "apartment.admin_id", "admin.id")
    .select(
      "apartment.id as id",
      "apartment.block_number",
      "apartment.entrance",
      "apartment.floor",
      "apartment.apartment_number",
      "apartment.field",
      "apartment.number_of_rooms",
      "apartment.price_per_square_meter",
      "apartment.total_price",
      "apartment.total_floor",
      "apartment.is_sold",
      "apartment.created_at as apartment_created_at",
      "apartment.admin_id",
      "admin.first_name",
      "admin.last_name",
      "admin.username"
    );

  // Block Number orqali qidirish
  if (block_number) list.andWhere({ block_number });

  // Padyezd bo'yicha qidirish
  if (entrance) list.andWhere({ entrance });

  // Filter by is_sold
  if (is_sold === "true") {
    list.where("apartment.is_sold", true);
  } else if (is_sold === "false") {
    list.where("apartment.is_sold", false);
  }

  // Sort by apartment_number
  if (apartment_number) {
    list.orderBy("apartment.apartment_number", apartment_number); // 'asc' or 'desc'
  }

  // Sort by total_price
  if (total_price) {
    list.orderBy("apartment.total_price", total_price); // 'asc' or 'desc'
  }

  let data = await list;
  return common.response.list(data);
};
