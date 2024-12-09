import Song from "./Song"
import { useEffect, useState } from "react";

function SongsPage({ album }) {

    const [token, setToken] = useState("");
    const [data, setData] = useState([]);
    const [songs, setSongs] = useState([]);


    useEffect(() => {

        const storedToken = window.localStorage.getItem("token");
        setToken(storedToken);

        const fetchSongs = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/albums/${album.id}/tracks?limit=40`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                const data = await response.json();
                setSongs(data.items)
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        fetchSongs();

        
    }, [album]);



    return (
        <div className='h-full overflow-y-scroll'>
            <div className='flex w-full bg-red-900 p-5 rounded-t-xl pb-8'>
                <div>
                    <img src={album.images[1]?.url} alt={`${album.name} cover`} className='rounded-md w-40 h-40' />
                </div>
                <div className='text-white pl-5 pt-11'>
                    <p className='text-xs'>Album</p>
                    <h1 className='text-6xl font-bold'>{album.name}</h1>
                    <div className='flex pt-2'>
                        <h3 className='font-bold'>{album.artists[0].name}</h3>
                        <h3 className='text-white-2 pl-1'>- {new Date(album.release_date).getFullYear()} - {album.total_tracks} songs, 51 min 5 sec</h3>
                    </div>
                </div>
            </div>
            <div className='text-white pt-5 pl-5 pr-5'>
                <div className="flex items-center text-white-2 text-sm p-3">
                    <h2 className="w-12 text-center">#</h2>
                    <div className="flex flex-col flex-grow pl-4">
                        <h2>Title</h2>
                    </div>
                    <div className="ml-auto flex space-x-96">
                        <h2 className="w-16 text-right">Plays</h2>
                        <h2 className="w-16 text-right">Duration</h2>
                    </div>
                </div>
                <div className=''>
                    {songs.map((song) => (
                        <div key={song.id}>
                            <Song song={song} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )


}
export default SongsPage