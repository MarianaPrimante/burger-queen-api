const express = require('express');
const app = express();
const db = require('./models/index');
const chalk = require('chalk');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3009, console.log(chalk.red("começou x")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/users", require("./routes/users"))
app.use("/orders", require("./routes/orders"))
app.use("/products", require("./routes/products"))

db.sequelize.sync();
