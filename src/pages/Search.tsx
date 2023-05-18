import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSongsBySearchQuery } from '../redux/service/shazamCore';
import { Error, Loader, SongCard } from '../components';

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery({searchTerm});

  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs && songs.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            data={{tracks: songs}}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Search