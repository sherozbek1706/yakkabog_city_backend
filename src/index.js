const express = require("express");
const config = require("./shared/config/index");

const PORT = config.port;
const app = express();

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT} CORRECTLY 🎉🎉🎉`);
});
