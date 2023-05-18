import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ArtistObject, RootObject, SearchObject, Track } from '../Types';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '7981f2c4demsha3742f8af13ca08p1bfa40jsn6c87d410f9b5');
      headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<RootObject, void>({
      query: () => '/charts/track',
    }),
    getSongsDetails: builder.query<Track, { songId: string | undefined }>({
      query: ({ songId }) => `/songs/get-details?key=${songId}`,
    }),
    getSongRelated: builder.query<{tracks?: Track[]}, { songId: string | undefined }>({
      query: ({ songId }) => `/songs/list-recommendations?key=${songId}`,
    }),
    getArtistDetails: builder.query<ArtistObject, { artistId: string | undefined }>({
      query: ({ artistId }) => `/artists/get-details?id=${artistId}`,
    }),
    getArtistSongs: builder.query<ArtistObject, { artistId: string | undefined }>({
      query: ({ artistId }) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsBySearch: builder.query<SearchObject, { searchTerm: string | undefined }>({
      query: ({ searchTerm }) => `/search?term=${searchTerm}`,
    }),
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongsDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetSongsBySearchQuery
} = shazamApi;