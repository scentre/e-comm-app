require("dotenv").config({ path: "./config/config.env" });
const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
