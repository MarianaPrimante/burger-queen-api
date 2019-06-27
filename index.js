const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(3005, () => {
  console.log("começou x")
});

app.use("/users", require("./routes/user"))

db.sequelize.sync();
// app.get("/", (req, resp) => {
//   resp.send("Legal!");
// });

// app.get("/users", (req, resp) => {
//   resp.send(
//     [
//       { id: 1, name: "Mari" },
//       { id: 2, name: "Laiz" },
//       { id: 3, name: "Bruno" },
//       { id: 4, name: "Amanda" }
//     ]
//   );
// });

// app.get("/orders", (req, resp) => {
// let orders = ('SELECT * ORDERS where user_id = ' + req.query.user_id)
//   orders = [
//     { user_id: 1, order_id: 1, totalPrice: 100 },
//     { user_id: 2, order_id: 2, totalPrice: 30 },
//     { user_id: 3, order_id: 3, totalPrice: 15 }
//   ]
//   resp.send(orders)
// });

// app.get("/users/:user_id", (req, resp) => {
//   resp.send("Você consultou o " + req.params.user_id);
// });

// app.get("/users", (req, resp) => {
//   resp.send("Quer saber coisas do: " + req.query.state + req.query.city)
// });

