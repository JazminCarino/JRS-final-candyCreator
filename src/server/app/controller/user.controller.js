const db = require("../models/index");

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({ message: "No email or password entered" });
        return;
      }

      const email = req.body.email;
      const password = req.body.password;
    
      query = "Select * from users where email=?;";
     
      console.log(email,password)
      db.query(query, [email], async (error, data, fields) => {
        if (error) {
          res.status(500).send({ error: error, message: "error retrieving data" });
          return;
        } else if (data && data.length == 0) {
          res.status(404).send({ message: "Email was not found" });
        } else {
          const comparison = await bcrypt.compare(password, data[0].password);
          if (comparison) {
            //successful log in attempt
            res.send(data[0]);
          } else {
            res.status(204).send();
          }
        }
      });
    }

//create new user
 exports.createUser = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).send({ message: "No email or password entered" });
      return;
    }
    //take email and password req
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
  
    const query = "INSERT INTO users (email, password, firstName, lastName) VALUES (?,?,?,?);";
    
    db.query(query, [email, encryptedPassword, firstName, lastName], (error, data, fields) => {
      if (error) {
  
        console.error(error);
        if (error.code == 'ER_DUP_ENTRY') {
          res.status(409).send({ message: "email already exists" });
          return     
        } else {
          res.status(500).send({ message: "Error creating new user", error: error }); 
          return     
        }
  
      } else {
        res.send({ data: data, message: "new user created " });
        return     
      }
    });
  };

  exports.getPastOrders = (req, res) => {
    const userId = req.params.userId;

    let query = "SELECT * FROM pastOrders WHERE userID = ?;"
    //select pastOrders.id, pastOrders.orderDate, pastOrders.totalPrice, 
    // products.name, orderedItem.price 
    // from orderedItems
    // inner join pastOrders
    //    on pastorders.id = orderedItems.orderId
    // inner join products
    //    on procucts.id = oderedItems.itemId
    // where pastOrders.userId = ?
    
    db.query(query,[userId], (err, data, fields) => {
      if (err) {
        res
          .status(500)
          .send({ message: "There was an error retrieving options" });
      }
      if(data.length == 0) {
        // no past orders

      }
      res.send({ pastOrders: data });
    });
  };