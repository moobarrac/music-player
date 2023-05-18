import React from 'react'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'
import { Track } from '../redux/Types';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type PropTypes = {
  song: Track;
  index: number;
  data: Track[]
}

const TopChartCard = ({song, index, data}: PropTypes) => {
  const { activeSong } = useAppSelector(state => state.player);
  const dispatch = useAppDispatch();
  
  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  }

  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2  ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'}`}>
      <h3 className='font-bold text-base text-white mr-3'>{index + 1}</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20 rounded-lg" />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  )
}

export default TopChartCard