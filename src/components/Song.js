function Song({song}) {



    function formatDuration(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className="flex items-center text-white p-3">
            <div className="w-12 text-center">
                <h2>{song.track_number}</h2>
            </div>

            <div className="flex-grow pl-4">
                <h2 className="text-white">{song.name}</h2>
                <h2 className="text-sm text-gray-300">{song.artists[0].name}</h2>
            </div>

            <div className="flex ml-auto space-x-96">
                <h2 className="w-64 text-right">0</h2>
                <h2 className="w-16 text-right">{formatDuration(song.duration_ms)}</h2>
            </div>
        </div>

    )

}
export default Song