import React, { useState, useEffect } from "react";
import Album from "./Album";

function AlbumsPage({ artistName, handleAlbumClick }) {
    const [token, setToken] = useState("");
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState([]);
    const [artistId, setArtistId] = useState([]);

    useEffect(() => {

        const storedToken = window.localStorage.getItem("token");
        setToken(storedToken);

        const fetchArtist = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                const data = await response.json();
                if (data.artists.items.length > 0) {
                    setArtistId(data.artists.items[0].id);
                } else {
                    console.error('Artist not found');
                }
            } catch (error) {
                console.error('Error fetching artist:', error);
            }
        };

        fetchArtist();
    }, [artistName]);

    useEffect(() => {
        const fetchAlbums = async () => {
            if (token && artistId) {
                try {
                    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const data = await response.json();
                    setAlbums(data.items || []);
                } catch (error) {
                    console.error('Error fetching albums:', error);
                }
            }
        };

        fetchAlbums();
    }, [artistId, token]);



    return (
        <div>
            <h1 className='text-white'>{artistName}</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 pt-4">
                {albums.map(album => (
                    <div className='p-10 border-xl hover:bg-gray-2 cursor-pointer' onClick={() => handleAlbumClick(album)}>
                        <Album key={album.id} albumData={album}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default AlbumsPage;
