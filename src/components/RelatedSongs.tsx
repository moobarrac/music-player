import React from 'react'
import SongBar from './SongBar'
import { ArtistDatum, ArtistObject, Track } from '../redux/Types';

type PropTypes = {
  data?: ArtistObject;
  artistId?: string
}

const RelatedSongs = ({data, artistId}: PropTypes) => {
  
  return (
    <div className='flex flex-col'>
      <h1 className="font-bold text-3xl text-white">Related Songs</h1>
      <div className="mt-6 w-full flex flex-col">
        {
          data?.data?.map((artist, index) => (
            <SongBar
              key={`${artist.id}-${artistId}`}
              artist={artist}
              index={index}
              data={data.data}
            />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedSongs