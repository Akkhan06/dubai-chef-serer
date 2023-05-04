const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000;

const card = require("./data/card.json")
// const detailsData = require("./data/details.json")

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cards', (req, res) => {
    res.send(card)
})

app.get('/cards/:id', (req, res) => {
    const id = req.params.id;
    const selected = card.find(x => x.id == id)
    res.send(selected)
})

// app.get('/view/', (req, res) => {
//   res.send(detailsData)
// })

// app.get('/view/:id', (req, res) => {
//   const id = req.params.id;
//   const selected = card.find(x => x.id == id)
//   res.send(selected)
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})