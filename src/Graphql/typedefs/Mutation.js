const Mutations = `
    type Mutation {
        addAlbum(album:AlbumInput!):Album
        addArtist(artist:ArtistInput!):Artist
        addUser(user:ArtistInput!):User
        addTrack(track:TrackInput!):Track
        addPlaylist:Playlist

        deleteTrack(id:ID!):Track
        deleteAlbum(id:ID!):Album
        deleteUser(id:ID!):User
        removeTrackFromPlayList:Track

        UpdateTrack(track:UpdateTrackInput):Track
        UpdateArtist(artist:ArtistInput!):Artist
        UpdateAlbum(album:UpdateAlbumInput):Album
    }

`

export default Mutations