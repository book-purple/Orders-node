const express = require('express')
const app = express()
const port = 3000

let checkoutRouter = require('./routes/apis/checkoutRouter');

app.get('/', (req, res) => res.json("Book-Purple Order and checkout Service"))
// health check API
app.use('/orders/health', (req, res) => res.json(
    "Order Service Up and Kicking"
));
// order v1 routes
app.use('/order/v1', checkoutRouter);
app.listen(port, () => console.log("Orders-Node is up"))