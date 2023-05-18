import React from 'react'
import { ArtistDatum, Track } from '../redux/Types';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import { useAppSelector } from '../redux/hooks';

type PropTypes = {
  song?: Track;
  artist?: ArtistDatum
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause = ({ song, handlePause, handlePlay }: PropTypes) => {
  const { activeSong, isPlaying } = useAppSelector(state => state.player)

  return (
  ( isPlaying && activeSong?.title === song?.title) ? (
    <FaPauseCircle
      size={35}
      className='text-gray-300'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className='text-gray-300'
      onClick={handlePlay}
    />
  )
  )
}

export default PlayPause