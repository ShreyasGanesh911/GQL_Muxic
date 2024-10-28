import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import connection from './db/index.js'
import typeDefs from './schema.js'
import resolvers from './resolvers.js'
const port = 8000
const runServer = async()=>{
    const app = express()
    app.use(express.json())
    app.use(cors())
    const server = new ApolloServer({
        typeDefs,
        resolvers
        
    })
    await server.start()
    app.use('',expressMiddleware(server))

    connection().then(()=>app.listen(port,()=>console.log("Listening to port ",port)))

}

runServer()