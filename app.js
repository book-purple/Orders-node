const express = requires('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sent("Gaurav Sharma"))
app.listen(port, () => console.log("Example app"))
