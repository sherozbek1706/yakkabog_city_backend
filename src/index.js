const express = require("express");
const config = require("./shared/config/index");
const mongodb = require("./db/mongodb");
const cors = require("cors");
const ip = require("ip");

console.log(ip.address());

const app = express();
const PORT = config.port || 9000;

app.use(express.json());
app.use(cors());

// import handleError
const handleError = require("./shared/errors/handle");

//import GeneralRoute
const router = require("./router");

// registered Route
app.use("/api/v1", router);

// registered Error
app.use(handleError);

// connecting db MONGODB
mongodb();

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${PORT} CORRECTLY 🎉🎉🎉`);
});
