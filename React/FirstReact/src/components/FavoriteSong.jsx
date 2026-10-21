function FavoriteSong(){
    const song = {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: 200,
        plays: 4800000000
    };


    return(
        <>
            <h2>Song:</h2>  
            <p>{song.title} / {song.artist}</p>
            <p>{Math.floor(song.duration / 60)}:{song.duration % 60}</p>  
            <p>Listens: {(song.plays/1_000_000).toLocaleString()}M streams</p>    
        </>
    )
}

export default FavoriteSong;