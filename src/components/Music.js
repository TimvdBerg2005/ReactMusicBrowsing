import Artists from "./Artists";
import AlbumsPage from "./AlbumsPage";
import SongsPage from "./SongsPage";
import Homepage from "./Homepage"
import React, { useState } from "react";

function Music() {

    const [currentPage, setCurrentPage] = useState('albums');
    const [currentArtistName, setCurrentArtistName] = useState('none');
    const [currentAlbumData, setCurrentAlbumData] = useState();

    const [artists, setArtists] = useState([
        "Taylor Swift",
        "Gracie Abrams",
        "Sabrina Carpenter",
        "Olivia Rodrigo",
        "Harry Styles",
        "Conan Gray",
        "Noah Kahan",
        "Renee Rapp",
        "Sasha Alex Sloan",
        "N.W.A.",
        "Daft Punk",
        "Boef",
        "Dave"
        
    ]);

    const showAlbums = () => setCurrentPage('albums');
    const showSongs = () => setCurrentPage('songs')
    const showHomepage = () => setCurrentPage('homepage')



    const handleArtistClick = (artist) => {
        setCurrentArtistName(artist)
        showAlbums();
    }

    const handleAlbumClick = (albumData) => {
        setCurrentAlbumData(albumData);
        showSongs();
    }


    return (
        <div className='flex w-full'>
            <div className='h-[90vh]'>
                <Artists
                    currentArtist={currentArtistName}
                    handleArtistClick={handleArtistClick}
                    artists={artists}
                />
            </div>
            <div className="h-[90vh] w-screen bg-gray-1 rounded-xl mb-1 ml-1 mr-1">
                {currentArtistName === 'none' ? (
                    <Homepage />
                ) : currentPage === 'albums' ? (
                    <div className="h-full overflow-y-auto p-6">
                        <AlbumsPage
                            artistName={currentArtistName}
                            handleAlbumClick={handleAlbumClick}

                        />
                    </div>
                ) : (
                    <SongsPage album={currentAlbumData} />
                )}
            </div>
        </div>
    );
}

export default Music