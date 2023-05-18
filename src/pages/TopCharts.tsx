import React from 'react'
import { useGetTopChartsQuery } from '../redux/service/shazamCore';
import { Error, Loader, SongCard } from '../components';
import { Track } from '../redux/Types';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top Charts</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((song: Track, index: number) => (
          <SongCard
            key={song.key}
            song={song}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCharts