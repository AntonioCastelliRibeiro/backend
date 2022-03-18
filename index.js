const express = require('express')
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/att', (req, res) => {
  res.status(200).json({
    id: 1,
    msg: "Atualização"
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})