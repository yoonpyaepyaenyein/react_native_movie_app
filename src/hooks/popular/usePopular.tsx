import {useInfiniteQuery, useQuery} from 'react-query';
import {fetchGet} from '../../utils/apiClient';
import {PopularType} from '../../types/popularMovieDataType';

export const usePopular = () => {
  const fetchPopular = async ({pageParam = 1}): Promise<PopularType> => {
    let endPoint = `/3/movie/popular?language=en-US&page=${pageParam}`;
    const response = await fetchGet({
      route: endPoint,
    });
    // console.log('TS_________', response);
    return response;
  };
  return useQuery(['popularList'], fetchPopular);
  // return useInfiniteQuery({
  //   queryKey : ['popuarList'],
  //   queryFn: fetchPopular,
  //   staleTime : 0,
  //   enabled : true,
  //   getNextPageParam : (lastPage, page) => lastPage.page +
  // })
};

// '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
