const express = require("express");
const config = require("./shared/config/index");
const mongodb = require("./database/mongodb");
const cors = require("cors");

const app = express();
const PORT = config.port || 9000;

app.use(express.json());
app.use(cors());

// import handleError
const handleError = require("./shared/errors/handle");

// registered Error
app.use(handleError);

// connecting db MONGODB
mongodb();

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT} CORRECTLY 🎉🎉🎉`);
});
