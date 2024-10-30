const Inputs = `
    input TrackInput {
        title:String!
        picture:String!
        album:String!
        artist:String!
    }
    input UpdateTrackInput {
        title:String
        picture:String
        album:String
        artist:String
    }
    input AlbumInput {
        name:String!
        picture:String!
        artist:String!
    }
    input UpdateAlbumInput {
        name:String!
        picture:String!
        artist:String!
    }
    input ArtistInput {
        name:String!
        profile:String!
    }

`

export default Inputs