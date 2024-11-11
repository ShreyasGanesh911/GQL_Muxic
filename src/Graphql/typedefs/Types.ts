const Types = `
    type User{
        id :ID!
        name : String!
        profile: String!
        followers: Int!
        playlists:[Playlist!]
    }

    type Track{
        id:ID!
        title:String!
        duration:Int!
        artist: Artist!
        picture:String!
        album : Album!
    }

    type Album{
        id:ID!
        name:String!
        artist:Artist
        tracks:[Track!]!
        releaseDate:String!
        picture:String!
    }

    type Artist{
        id:ID!
        name:String!
        albums:[Album!]
        tracks:[Track!]
        
    }

    type Playlist{
        id:ID!
        name:String!
        tracks:[Track!]!
        owner:User!
        description:String!
    }
`

export default Types