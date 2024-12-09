function Artists({ artists, handleArtistClick, currentArtist }) {

    return (
        <div className="h-full w-64 flex flex-col bg-gray-1 text-gray-200 shadow pt-5 pl-3 rounded-xl mb-1 ml-1 mr-1">
            <h1 className="text-4xl pb-5">Artists</h1>
            <ul>
                {artists.map((artist) => (

                    <li
                        key={artist}
                        onClick={() => handleArtistClick(artist)}
                        className={artist === currentArtist ? 'text-gray-300 font-bold pb-2' : 'text-gray-400 cursor-pointer text-l pb-2'}
                    >
                        {artist}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Artists;
