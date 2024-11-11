export type AlbumType = {
    _id:string
    name:string
    picture:string
    releaseDate:Date
    artist:string
}
export type UserType = {

    _id:string,
    name:string,
    followers:number
}
export type PlayListType = {
    _id:string
    name:string
    track:string
    owner: string
}
export type TrackType = {
    _id:string
    title:string
    picture:string
    duration:number
    albumId:string
    artistId:string
}