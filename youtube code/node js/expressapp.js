const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!5')
})

app.get('/about', (req, res) => {
    res.send('This is an about page5!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
