const mongoose = require('mongoose')
const { MONGODB_USER, MONGODB_PASSWORD, DB_NAME } = require('./config')

const URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster-clickcollect.fsgcrxd.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const MongoClient = {
  initialize: async () => {
    try {
      const client = mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      await client.then(() => console.log(`Successfully connect to DB: ${DB_NAME}🎉`))
    } catch (e) {
      throw Error(e)
    }
  }
}

module.exports = MongoClient
