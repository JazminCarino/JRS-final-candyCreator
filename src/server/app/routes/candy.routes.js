module.exports = (app) => {
  const candy = require("../controller/candy.controller");

  app.get("/api/products/:catId", candy.getProductsByCategory);
  app.get("/api/candyoptions", candy.getAllOptions);
  app.get("/api/products", candy.getAllProducts);
  

};
