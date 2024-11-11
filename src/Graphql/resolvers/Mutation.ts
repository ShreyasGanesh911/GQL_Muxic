import Album from "../../Models/Album.js"
import Artist from "../../Models/Artist.js"
import Track from "../../Models/Track.js"
import User from "../../Models/user.js"
import { AlbumType,UserType,TrackType } from "../../Types/index.js"
type Str = {
    id: string;
}
type ArtistT = {
    artist:UserType
}
type UserT = {
    user:UserType
}
type AlbumT = {
    album:AlbumType
    }
type TrackT = {
    track:TrackType
    }
const Mutation = {
    addAlbum:async(parent:AlbumType,{album}:AlbumT)=>await Album.create(album),
    addArtist:async(_:any,{artist}:ArtistT)=>await  Artist.create(artist),
    addUser:async(_:any,{user}:UserT)=>await User.create(user),
    addTrack:async(_:any,{track}:TrackT)=>await Track.create(track),
    deleteTrack:async(_:any,{id}:Str)=>await  Track.findByIdAndDelete({_id:id}),
    deleteAlbum:async(_:any,{id}:Str)=>await   Album.findByIdAndDelete({_id:id}),
    deleteUser:async(_:any,{id}:Str)=> await User.findByIdAndDelete({_id:id}),
    //removeTrackFromPlayList:async(_,{userId,songId}:)=> await PlayList
}
export default Mutation
