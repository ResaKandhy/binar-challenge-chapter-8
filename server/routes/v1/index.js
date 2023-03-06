const playerRouter = require("./player.routes");
const v1 = require("express").Router();
const swaggerJSON = require("../v1/swagger.json");
const swaggerUI = require("swagger-ui-express");

v1.get("/", (_, res) => {
  res.send("from v1");
});

v1.use("/players", playerRouter);
v1.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));
module.exports = v1;
