const express = require('express')
const app = express()
const port = 3000

let checkoutRouter = require('./routes/apis/checkoutRouter');

app.get('/', (req, res) => res.json("Gaurav Sharma"))
//app.use(app.router);
//checkoutRouter.initialize(app);
// health check API
app.use('/orders/health', (req, res) => res.json(
    "Orders Service Up and Kicking"
));
app.use('/order/v1', checkoutRouter);
app.listen(port, () => console.log("Example app"))


