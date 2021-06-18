const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("./app/models/index")

require("./app/routes/candy.routes")(app);
require("./app/routes/cart.routes")(app);
require("./app/routes/user.routes")(app);


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
