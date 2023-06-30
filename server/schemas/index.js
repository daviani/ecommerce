const graphql = require('graphql')
const Product = require('../models/products')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = graphql

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLString },
    category: { type: GraphQLString },
    filter: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve () {
        return 'Hello GraphQL'
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve (parent, args) {
        return Product.find()
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

module.exports = schema
