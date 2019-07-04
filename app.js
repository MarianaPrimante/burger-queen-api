const express = require('express');
const app = express();
const db = require('./models/index');
const chalk = require('chalk');

app.listen(3008, console.log(chalk.red("começou x")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/users", require("./routes/users"))
app.use("/orders", require("./routes/orders"))
app.use("/products", require("./routes/products"))



db.sequelize.sync();
