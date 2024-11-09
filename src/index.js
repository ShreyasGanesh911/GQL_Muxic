import express from 'express'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4'
import connection from './db/index.js'
import server from './server.js'
const port = 8000
const runServer = async()=>{
    const app = express()
    app.use(express.json())
    app.use(cors())
    await server.start()
    app.use('',expressMiddleware(server))
    connection().then(()=>app.listen(port,()=>console.log("Listening to port ",port)))
}

runServer()