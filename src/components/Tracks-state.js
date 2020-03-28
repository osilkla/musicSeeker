import React, { useState } from 'react';
// hook
const useMusic = (audioUrl, isPlaying) => {
   const audioRef = React.useRef(new Audio(audioUrl)); //keep the same audio
   React.useEffect(() => {
      if (isPlaying) {
         audioRef.current.play();
      }
      else {
         audioRef.current.pause();
      }
   }, [isPlaying])
};

const Track = ({ id, name, album, preview_url, isPlaying, onPlay }) => {
   useMusic(preview_url, isPlaying);
   return (
      <div onClick={onPlay} className='track' >
         <img
            src={album.images[0].url}
            alt='track-image'
            className='track-image'
         />
         <p className='track-text'>{name}</p>
         <p className='track-icon'>{isPlaying ? 'playing' : 'paused'}</p>
      </div>
   )
}


const TracksState = ({ tracks }) => {

   const [trackId, setTrackId] = useState();

   return <div>
      {
         tracks.map(track => {
            const selectTrack = () => {
               if (trackId === track.id) {
                  return setTrackId()
               }
               return setTrackId(track.id)
            }
            return (
               <Track key={track.id} {...track} isPlaying={trackId === track.id} onPlay={selectTrack} />
            )
         })
      }
   </div>

}
export default TracksState;