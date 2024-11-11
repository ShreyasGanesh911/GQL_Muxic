import Artist from '../../Models/Artist.js'
import Album from '../../Models/Album.js'
import Track from '../../Models/Track.js'
import PlayList from '../../Models/Playlist.js';
import User from '../../Models/user.js';
import Query from './query.js';
import Mutation from './Mutation.js';
import { AlbumType, UserType,PlayListType,TrackType } from '../../Types/index.js';
const resolvers = {
    Artist:{
        albums:async(parent:UserType)=>await Album.find({artist:parent._id}),
        tracks:async(parent:UserType)=>await Track.find({artistId:parent._id})     
    },
    Album:{
        artist:async(parent:AlbumType)=>await  Artist.findById({_id:parent.artist}),
        tracks:async(parent:AlbumType)=>await Track.find({albumId:parent._id}),

    },
    Track:{
        album:async(parent:TrackType)=>await Album.findById({_id:parent.albumId}),
        artist:async(parent:TrackType)=>await Artist.findById({_id:parent.artistId}),
    },
    Playlist:{
        owner:async(parent:PlayListType)=>await  User.findById({_id:parent.owner}),

    },
    User:{
        playlists:async(parent:UserType)=>await PlayList.find({userId:parent._id})
    },
    Query,
    Mutation
}

export default resolvers;
