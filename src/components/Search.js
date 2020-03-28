import React, { useState } from 'react';

const Search = (props) => {
  const [artistQuery, setArtistQuery] = useState("");

  const searchArtist = () => {
    props.onSearch(artistQuery);
  }
  const handleEnter = (event) => {
    event.preventDefault();
    searchArtist();
  }
  const updateArtistQuery = (event) => {
    setArtistQuery(event.target.value)
  }

  return (
    <form onSubmit={handleEnter}>
      <input
        className="searchTerm"
        onChange={updateArtistQuery}
        placeholder='Search an artist' />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  )

}

export default Search;