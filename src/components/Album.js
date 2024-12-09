const getAlbumType = (total_tracks) => {
    if (total_tracks > 1) {
        return 'Album';
    } else {
        return 'Single';
    }
}



const Album = ({albumData}) => {

    return (
        <div>
            <img src={albumData.images[1]?.url} alt={`${albumData.name} cover`} className='rounded-xl'/>
            <h2 className='ml-1 mt-3 text-white' >{albumData.name}</h2>
            <h3 className='ml-1 text-white-2'>{new Date(albumData.release_date).getFullYear()} - {getAlbumType(albumData.total_tracks)}</h3>
        </div>
    );
};

export default Album;