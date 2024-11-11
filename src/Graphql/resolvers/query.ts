import Artist from '../../Models/Artist.js'
import Album from '../../Models/Album.js'
import Track from '../../Models/Track.js'
import PlayList from '../../Models/Playlist.js';
import User from '../../Models/user.js';
type Str = {
    id:string
}
const Query= {
    getPlayList:async(_:any,{id}:Str)=>await  PlayList.findById({_id:id}),
    getAlbum:async(_:any,{id}:Str)=>await  Album.findById({_id:id}),
    getArtist:async(_:any,{id}:Str)=>await Artist.findById({_id:id}),
    getUser:async(_:any,{id}:Str)=>await User.findById({_id:id}),
    getTrack:async(_:any,{id}:Str)=>await  Track.findById({_id:id}),
    getAllArtists:async()=>await Artist.find()
}

export default Query