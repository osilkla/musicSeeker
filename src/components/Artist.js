import React from 'react';

 
const Artist = ({artist}) => {
   const {images, name, genres} = artist;
      return (
         <div>
            <img style={{height:"200px", borderRadius:"100px", objectFit:"cover"}} src={images[0].url}/>
            <h3>
               {name}
            </h3> 
            <div>
               Genre : <em>{genres.join(",")}</em>  
            </div>
         </div>
      )
    
}

export default Artist;