const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening to ${port}`));
