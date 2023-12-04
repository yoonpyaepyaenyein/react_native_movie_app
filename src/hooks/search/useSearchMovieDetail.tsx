import React from 'react';
import {MovieDetailType} from '../../types/MovieDetailType';
import {fetchGetDetail} from '../../utils/apiClient';
import {useQuery} from 'react-query';

export const useSearchMovieDetail = (id: any) => {
  const fetchSearchMovieDetail = async ({
    pageParam = 1,
  }): Promise<MovieDetailType> => {
    const response = await fetchGetDetail(
      {page: pageParam},
      {route: `/3/movie/${id}`},
      {
        query: `&append_to_response=videos`,
      },
    );
    // console.log('TS_________', response);
    return response;
  };
  return useQuery(['searchDetail'], fetchSearchMovieDetail);
};
