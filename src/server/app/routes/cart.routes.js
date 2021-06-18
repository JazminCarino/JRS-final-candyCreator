module.exports = (app) => {

  const cart = require("../controller/cart.controller")

  app.get("/api/cart", cart.getAllItems);
  app.get("/api/cart/:userId", cart.getAllItemsByUserId);

  app.post("/api/cartItem", cart.addToCart);
  app.post("/api/checkout", cart.checkout);
  
  app.delete("/api/cart/clear/", cart.clearUsersCartByUserId);
  app.delete("/api/cartItem/:id", cart.deleteCartItemById);
 

};
