module.exports = (app) => {

    const users = require("../controller/user.controller");
  
    // users
     app.post("/api/user/login", users.login);
     app.post("/api/user", users.createUser);

     app.get("/api/user/pastOrders/:userId", users.getPastOrders)

    //http://localhost:8080/api/cart/3
    ///api/user/pastOrders/:userId

    // app.get()   //params , no body
    // app.delete() // params, no body

    // app.post() // params and body
    // app.put() // params and body
     
  };