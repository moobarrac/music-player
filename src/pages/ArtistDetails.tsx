import React from 'react'
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery, useGetArtistSongsQuery } from '../redux/service/shazamCore';

const ArtistDetails = () => {
  const  { id: artistId } = useParams();
  const { data: artistData, error } = useGetArtistDetailsQuery({ artistId })
  const { data: artistSong } = useGetArtistSongsQuery({ artistId })

  if (!artistData) {
    return <Loader title='Searching artist details'/> 
  }

  if(error) return <Error/>

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId} artistData={artistData} />


      <RelatedSongs
        data={artistSong}
        artistId={artistId}
      />
    </div>
  )
}

export default ArtistDetails