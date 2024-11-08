import Album from "../../Models/Album.js"
import Artist from "../../Models/Artist.js"
import PlayList from "../../Models/Playlist"
import Track from "../../Models/Track.js"
import User from "../../Models/user.js"

const Mutation = {
    addAlbum:async(parent,{album})=>await Album.create(album),
    addArtist:async(_,{artist})=>await  Artist.create(artist),
    addUser:async(_,{user})=>await User.create(user),
    addTrack:async(_,{track})=>await Track.create(track),
    deleteTrack:async(_,{id})=>await  Track.findByIdAndDelete({_id:id}),
    deleteAlbum:async(_,{id})=>await   Album.findByIdAndDelete({_id:id}),
    deleteUser:async(_,{id})=> await User.findByIdAndDelete({_id:id}),
    removeTrackFromPlayList:async(_,{userId,songId})=> await PlayList
}
export default Mutation
