const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!\nRM: 337956   NOME: GABRIEL LUCAS DE TOLEDO RIBEIRO'+
	  '\nRM: 337432 NOME: Lucas Rodrigues')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
