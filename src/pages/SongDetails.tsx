import React from 'react'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetSongRelatedQuery, useGetSongsDetailsQuery } from '../redux/service/shazamCore';

const SongDetails = () => {
  const  { songId } = useParams();
  const { data: songData, error } = useGetSongsDetailsQuery({ songId })
  const { data } = useGetSongRelatedQuery({ songId })

  if (!songData || !data) {
    return <Loader title='Searching song details'/> 
  }

  if(error) return <Error/>

  return (
    <div className='flex flex-col'>
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white font-bold text-3xl">Lyrics</h2>
        <div className="mt-5">
        {
          songData?.sections[1].type === 'LYRICS'  ? 
            songData?.sections[1].text.map((line, index) => (
              <p className="text-gray-400 text-base my-1" key={index}>{line}</p>
            )) : (
              <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
            )
        }
        </div>
      </div>

      {/* <RelatedSongs
        data={data}
      /> */}
    </div>
  )
}

export default SongDetails