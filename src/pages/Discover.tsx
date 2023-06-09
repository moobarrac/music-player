import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from "../redux/service/shazamCore";
import { Track } from "../redux/Types";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Discover = () => {
  const dispatch = useAppDispatch();
  const {data, isFetching, error} = useGetTopChartsQuery();
  
  const genreTitle = 'Pop'

  if (isFetching) return <Loader title={"Loading songs...."}/>

  if (error) return <Error />
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          value=""
          onChange={() => {}}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => {
            return (
              <option value={genre.value} key={genre.value}>{genre.title}</option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((song: Track, index: number) => (
          <SongCard
            key={song?.key}
            song={song}
            index={index}
            data={data}
          />
        ))}
      </div>
    </div>
  )
};

export default Discover;
