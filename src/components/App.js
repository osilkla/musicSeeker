import React, { useState } from 'react';
import Artist from './Artist';
import TracksState from './Tracks-state';
import Search from './Search';
import Loader from './Loader';
import useArtist from '../hooks/useArtist';

const App = () => {
  const [searchValue, setSearchValue] = useState()
  const [loading, artist, tracks] = useArtist(searchValue);

  return (
    <div>
      <h2>EZDJ REACT</h2>
      <Search onSearch={setSearchValue} />
      {loading ? <Loader /> : null}
      {
        artist && tracks && !loading ?
          <div className="container">
            <Artist artist={artist} />
            <TracksState tracks={tracks} />
          </div>
          : null
      }
    </div>
  );
}

export default App;
