import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { ArtistDatum } from '../redux/Types';

type PropTypes = {
  artist: ArtistDatum;
  index: number;
  data?: ArtistDatum[];
  artistId?: string
}

const SongBar = ({ artist, index, artistId, data }: PropTypes) => {
  const { activeSong } = useAppSelector(state => state.player)
  const dispatch = useAppDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ artist, data, index }))
    dispatch(playPause(true));
  }
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e]  py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={artist?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')}
          alt={'Image'}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          {/* {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">
                {song?.title}
              </p>
            </Link>
          ) : ( */}
            <p className="text-xl font-bold text-white">
              {artist?.attributes?.name}
            </p>
          {/* )} */}
          <p className="text-base text-gray-300 mt-1">
            { artist?.attributes?.albumName }
          </p>
        </div>
      </div>
      {/* {!artistId
        ? (
          <PlayPause
            artist={artist}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        )
        : null} */}
    </div>
  );
}

export default SongBar;