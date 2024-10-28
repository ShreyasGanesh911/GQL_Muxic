const typeDefs = `
    #graphql
    
    type User{
        id :ID!
        name : String!
        profile: String!
        followers: Int!
    }

    type Track{
        id:ID!
        title:String!
        duration:Int!
        artist:[Artist!]!
        picture:String!
        album : Album!
    }

    type Album{
        id:ID!
        name:String!
        artist:[Artist!]!
        tracks:[Track!]!
        releaseDate:String!
        picture:String!
    }

    type Artist{
        id:ID!
        name:String!
        albums:[Album!]!
        tracks:[Track!]!
        
    }

    type Playlist{
        id:ID!
        name:String!
        tracks:[Track!]!
        owner:User!
        description:String!
    }

    type  Query {
        getPlayList(id:ID!):[Track]
        getArtist(id:ID!):Artist
        getUser(id:ID!):User
        getTrack(id:ID!):Track
        getAlbum(id:ID!):[Track]!
    }



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