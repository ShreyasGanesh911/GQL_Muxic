import Artist from '../../Models/Artist.js'
import Album from '../../Models/Album.js'
import Track from '../../Models/Track.js'
import PlayList from '../../Models/Playlist.js';
import User from '../../Models/user.js';
const Query= {
    getPlayList:async(_,{id})=>await  PlayList.findById({_id:id}),
    getAlbum:async(_,{id})=>await  Album.findById({_id:id}),
    getArtist:async(_,{id})=>await Artist.findById({_id:id}),
    getUser:async(_,{id})=>await User.findById({_id:id}),
    getTrack:async(_,{id})=>await  Track.findById({_id:id}),
    getAllArtists:async()=>await Artist.find()
}

export default Query