import React from 'react';
import {MovieDetailType} from '../../types/MovieDetailType';
import {fetchGetDetail} from '../../utils/apiClient';
import {useQuery} from 'react-query';
import {UpcomingMovieType} from '../../types/UpcomingMovieType';

export const useUpcomingMovie = () => {
  const fetchUpcomingMovieDetail = async ({pageParam = 1}): Promise<any> => {
    const response = await fetchGetDetail(
      {page: pageParam},
      {route: `/3/movie/upcoming`},
      {
        query: `?language=en-US&page=1`,
      },
    );
    // console.log('TS_________>>', response.results);
    return response;
  };
  return useQuery(['upComingMovie'], fetchUpcomingMovieDetail);
};
