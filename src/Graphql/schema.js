import Inputs from "./typedefs/Input.js" // Schema
import Mutations from "./typedefs/Mutation.js" //Update,delete and read operations
import Queries from "./typedefs/Query.js" // Read operations
import Types from "./typedefs/Types.js"  // Schema types

const typeDefs = `
    #graphql
    ${Types} 
    ${Queries}
    ${Mutations}
    ${Inputs}
`

export default typeDefs

/*
    Basic schema -->
    *   users --> listeners
    *   Artists --> publish songs
    *   Tracks --> songs released by artists, which belong to an album
    *   Album --> belongs to an artist which has tracks in it
    *   Playlists --> created by a user
*/