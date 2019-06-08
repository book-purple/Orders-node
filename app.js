const express = require('express')
const app = express()
const port = 3000

let checkoutRouter = require('./routes/apis/checkoutRouter');

app.get('/', (req, res) => res.json("Gaurav Sharma"))
//app.use(app.router);
//checkoutRouter.initialize(app);
app.use('/order/v1', checkoutRouter);
app.listen(port, () => console.log("Example app"))


