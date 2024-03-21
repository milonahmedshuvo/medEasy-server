const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000


// middleware setup 
app.use(express.json())
app.use(cors())

// dotenv setup 
require('dotenv').config()
// console.log(process.env.USER_NAME)





const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.hcgdznz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {

  try {
    
    const categoryCollection = await client.db("medeasyDB").collection("categoris")




    app.get("/categoris", async (req, res) => {
        const query = { }
        const categoris = await categoryCollection.find(query).toArray()
        res.send(categoris)
    })





    
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);









app.get('/', (req, res) => {
  res.send('MedEasy server run..!')
})

app.listen(port, () => {
  console.log(`MedEasy server app listening on port ${port}`)
})
