import { ApolloServer } from '@apollo/server'
import typeDefs from './Graphql/schema.js'
import resolvers from './Graphql/resolvers/index.js'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

export default server