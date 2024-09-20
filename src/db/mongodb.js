const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/yakkabog_city")
    .then(() => {
      console.log("Server has been successfully connected database MONGODB");
    })
    .catch(() => {
      console.log("Server has not connected database MONGODB");
    });
};

module.exports = connection;
