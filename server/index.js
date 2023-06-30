const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"
const express = require('express')
const cors = require('cors')
const app = express()
const MongoClient = require('./mongoClient')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/index')
// API REST
const Product = require('./models/products')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello Express 🎉')
})

// API REST

app.get('/products', async (req, res) => {
  const products = await Product.find({})
  try {
    res.send(products)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/products/:category', async (req, res) => {
  const category = req.params.category
  const products = await Product.find({ category })
  try {
    res.send(products)
  } catch (err) {
    res.status(500).send(err)
  }
})

// GRAPHQL UI
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Server up and running on port :${PORT} 🎉`)
  return MongoClient.initialize()
})
