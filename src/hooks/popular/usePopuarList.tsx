import {useInfiniteQuery, useQuery} from 'react-query';
import {fetchGetDetail} from '../../utils/apiClient';
import {PopularType} from '../../types/popularMovieDataType';

export const usePopularList = () => {
  const fetchPopularList = async ({pageParam = 1}): Promise<PopularType> => {
    const response = await fetchGetDetail(
      {page: pageParam},
      {route: '/3/movie/popular'},
      {query: `?language=en-US&page=${pageParam}`},
    );
    // console.log('TS_________', response);
    return response;
  };
  //   return useQuery(['popularList'], fetchPopular);
  return useInfiniteQuery({
    queryKey: ['fetchPopularList'],
    queryFn: fetchPopularList,
    staleTime: 0,
    enabled: true,
    getNextPageParam: lastPage => {
      // Check if lastPage is defined before accessing the page property
      return lastPage ? lastPage.page + 1 : undefined;
    },
  });
};
