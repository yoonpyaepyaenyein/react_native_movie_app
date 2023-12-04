import {useInfiniteQuery, useMutation} from 'react-query';
import {fetchGetDetail} from '../../utils/apiClient';

// export const useSearchMovieList = () => {
//   //   console.log('sesrchKeyword :::', searchKeyword);
//   const searchMovieMutation = useMutation(async (data: any) => {
//     const response = await fetchGetDetail(
//       {page: 1},
//       {route: '/3/search/keyword'},
//       {query: `?query=${data}&page=${1}`},
//     );
//     console.log('TS_________', response);
//     return response;
//   });
//   return searchMovieMutation;
// };

// export const useInfiniteMovieList = (keyword: string) => {
//   return useInfiniteQuery(
//     'fetchMovieList',
//     ({pageParam = 1}) =>
//       fetchGetDetail(
//         {page: pageParam},
//         {route: '/3/discover/movie'},
//         {query: `?query=${keyword}&page=${pageParam}`},
//       ),
//     {
//       getNextPageParam: lastPage => lastPage.page + 1,
//     },
//   );
// };

export const useSearchMovieList = (searchKeyword: string) => {
  return useInfiniteQuery({
    queryKey: ['fetchSearchList', {searchKeyword}],
    queryFn: ({pageParam = 1}) => {
      // query=a&include_adult=false&language=en-US&page=1
      // Note: You might need to adjust the API parameters based on your actual API
      const queryParams = `?query=${searchKeyword}&include_adult=false&language=en-US&page=${pageParam}`;
      return fetchGetDetail(
        {page: pageParam},
        {route: '/3/search/movie'},
        {query: queryParams},
      );
    },
    getNextPageParam: lastPage => lastPage.page + 1,
  });
};
