const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

// middleware setup 
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
  res.send('MedEasy server run..!')
})

app.listen(port, () => {
  console.log(`MedEasy server app listening on port ${port}`)
})
