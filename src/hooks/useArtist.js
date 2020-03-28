import React, { useState, useEffect } from 'react';
const API_URL = 'https://spotify-api-wrapper.appspot.com'

const useArtist = (artistQuery) => {
    const [loading, setLoading] = useState(false);
    const [artist, setArtist] = useState();
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        if (artistQuery) {
            setLoading(true);
            fetch(`${API_URL}/artist/${artistQuery}`)
                .then((response) => response.json())
                .then((json) => {
                    if (json.artists.total > 0) {
                        const artist = json.artists.items[0];
                        setArtist(artist);
                        fetch(`${API_URL}/artist/${artist.id}/top-tracks`)
                            .then((response) => response.json())
                            .then((json) => setTracks(json.tracks))
                            .catch((err) => alert("[traks err]" + err.message));
                    }
                })
                .catch((err) => alert("[artists err]" + err.message))
                .then(() => setLoading(false));
        }
    }, [artistQuery])
    // se relance a chaque modif de artistQuery

    return [loading, artist, tracks]
}

export default useArtist;