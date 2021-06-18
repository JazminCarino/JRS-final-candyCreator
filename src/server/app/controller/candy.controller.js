const db = require("../models/index");


//get candy options by category
 exports.getProductsByCategory = (req, res) => {
    console.log("getting options");
    console.log(req.params);

    const cat = req.params.catId;
  
    let query = "select * from products WHERE catId=?";
   
    db.query(query, [cat], (err, data, fields) => {
      if (err) {
        res
          .status(500)
          .send({ message: "There was an error retrieving options" });
      }
      res.send({ candyOptions: data, fields: fields });
    });
  };

 exports.getAllOptions = (req, res) => {
    console.log("getting options");
    console.log(req.params);
  
    let query = "select * from candyOptions ;";
  
    db.query(query, (err, data, fields) => {
      if (err) {
        res
          .status(500)
          .send({ message: "There was an error retrieving options" });
      }
      res.send({ candyOptions: data, fields: fields });
    });
  };
  
  exports.getAllProducts = (req, res) => {
    console.log("getting products");
    console.log(req.params);
  
    let query = "select * from products ;";
  
    db.query(query, (err, data, fields) => {
      if (err) {
        res
          .status(500)
          .send({ message: "There was an error retrieving options" });
      }
      res.send({ products: data, fields: fields });
    });
  };
  

// add creation
/**
 * should be called when a user clicks 'finish' or 'add to cart'
 * 
 * check if the item you are trying to make (or just made)
 * is already in the table (candyCreations)
 * 
 * if yes, do nothing
 * 
 * if no, add this new creation to the table
 */

// edit creation
/**
 * EDIT candy 
 * SET ...??? 
 *  WHERE id = ?
 */


// exports.editCandy() = (req, res) => {
//   const id = req.params.id;

//   const flavor1 = req.body.flavor1;
//   console.log(flavor1);

//   query = "UPDATE ... SET ? ..."

//   db.query(query, [(flavor1 ? flavor1 : null)])
// }