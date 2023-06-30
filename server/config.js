require('dotenv').config()

const MONGODB_USER = process.env.MONGODB_USERNAME
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const DB_NAME = process.env.DB_NAME

module.exports = {
  MONGODB_USER,
  MONGODB_PASSWORD,
  DB_NAME
}
