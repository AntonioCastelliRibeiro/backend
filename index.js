const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(express.json());

const port = process.env.PORT || 3333;

app.get('/att', (req, res) => {
  res.json({
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