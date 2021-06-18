const db = require("../models/index");

exports.getAllItems = (req, res) => {
  console.log("getting cart items");

  let query =
    "SELECT cartItems.id, cartItems.quantity, products.name, products.price, \
  candyCategory.categoryName \
  FROM cartItems \
  INNER JOIN products \
   ON cartItems.itemId = products.id \
 INNER JOIN candyCategory \
   ON products.catId = candyCategory.id;";

  db.query(query, (err, data, fields) => {
    if (err) {
      res.status(500).send({ message: "There was an error retrieving items" });
    }
    res.send({ itemId: data, fields: fields });
  });
};

exports.getAllItemsByUserId = (req, res) => {
  console.log("getting cart items");

  const userId = req.params.userId;

  let query =
    "SELECT cartItems.id, cartItems.quantity, products.name, products.price, \
  candyCategory.categoryName \
  FROM cartItems \
  INNER JOIN products \
   ON cartItems.itemId = products.id \
 INNER JOIN candyCategory \
   ON products.catId = candyCategory.id \
 WHERE cartItems.userId = ?;";

  db.query(query, [userId], (err, data) => {
    if (err) {
      res.status(500).send({ message: "There was an error retrieving items" });
    }
    res.send(data);
  });
};

exports.addToCart = (req, res) => {
  console.log("adding item");

  const userId = req.body.userId;
  const itemId = req.body.itemId;

  query = "INSERT INTO cartItems (userId, itemId, quantity) VALUES (?, ?, 1);";

  db.query(query, [userId, itemId], (error, data, fields) => {
    if (error) {
      console.error(error);
      if (error) {
        res.status(500).send({ message: "Error adding item", error: error });
        return;
      }
    } else {
      res.send({ data: data, message: "item added" });
      return;
    }
  });
};

exports.clearUsersCartByUserId = (req, res) => {
  const id = req.params.id;

  query = "DELETE * cartItems WHERE id=?;";

  db.query(query, [id], (err, data) => {
    if (err) {
      res.status(500).send({ message: "There was an error deleting the cart" });
    } else {
      res.send({ data: data});
    }
  });
};

exports.deleteCartItemById = (req, res) => {
  const id = req.params.id;

  query = "DELETE FROM cartItems WHERE id=?;";

  db.query(query, [id], (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: "There was an error deleting item from the cart" });
      console.log(id);
    } else {
      res.send({ data: data });
    }
  });
};

exports.checkout = (req, res) => {

  const userId = req.body.userId;
  const totalPrice = req.body.totalPrice;

  query = "INSERT INTO pastOrders (userId, totalPrice) VALUES (?,?);";
  
  db.query(query, [userId, totalPrice], (error, data) => {
    
    if (error) {
      console.error(error);
      if (error) {
        res.status(500).send({ message: "Error checking out", error: error });
        return;
      }
    } else {
      res.send({ data: data, message: "Checkout Complete" });
      return;
    }
  });
};

function checkIfInCart(res, userId, itemId) {
  // write  a query to SELECT where userID = userId AND itemID = itemID
  // if it is in cart (result.length > 0)
  // then  do another query and after, simply     ->   res.send("quantity updated");
}

// UPDATE cartItems SET qauntity = qauntity + 1 WHERE (id = ?);

// add to cart
/**
 * option 1)
 *  check if item is in cart
 *  if yes, use quantity (from the select query you would have used anyways)
 *  and add 1 (data.quantity++)
 *      then (in another query) set new values in the cart table with the new quantity
 *          (edit cart SET quantity = ? where itemId = ?)
 *
 * if no, then add item to cart table
 *      INSERT into cart values ....
 */
