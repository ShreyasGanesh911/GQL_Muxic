import Artist from '../Models/Artist.js'
import Album from '../Models/Album.js'
import Track from '../Models/Track.js'
import PlayList from '../Models/Playlist.js';
import User from '../Models/user.js';

const resolvers = {
    Artist:{
        albums:async(parent)=>await Album.find({artist:parent._id}),
        tracks:async(parent)=>await Track.find({artistId:parent._id})     
    },
    Album:{
        artist:async(parent)=>await  Artist.findById({_id:parent.artist}),
        tracks:async(parent)=>await Track.find({albumId:parent._id}),

    },
    Track:{
        album:async(parent)=>await Album.findById({_id:parent.albumId}),
        artist:async(parent)=>await Artist.findById({_id:parent.artistId}),
    },
    Playlist:{
        owner:async(parent)=>await  User.findById({_id:parent.owner}),

    },
    User:{
        playlists:async(parent)=>await PlayList.find({userId:parent._id})
    },
    Query: {
        getPlayList:async(_,{id})=>await  PlayList.findById({_id:id}),
        getAlbum:async(_,{id})=>await  Album.findById({_id:id}),
        getArtist:async(_,{id})=>await Artist.findById({_id:id}),
        getUser:async(_,{id})=>await User.findById({_id:id}),
        getTrack:async(_,{id})=>await  Track.findById({_id:id}),
        getAllArtists:async()=>await Artist.find()
    }
}

export default resolvers;
