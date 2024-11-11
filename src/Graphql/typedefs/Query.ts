const Queries = `
    type Query {
        getPlayList(id:ID!):[Track]
        getArtist(id:ID!):Artist!
        getAllArtists:[Artist!]
        getUser(id:ID!):User
        getTrack(id:ID!):Track
        getAlbum(id:ID!):Album
    }
`
export default Queries