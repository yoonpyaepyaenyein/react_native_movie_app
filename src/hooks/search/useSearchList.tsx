// import {useInfiniteQuery, useQuery} from 'react-query';
// import {fetchGetDetail} from '../../utils/apiClient';
// import {SearchMovieType} from '../../types/searchMovieDataType';

// export const useSearchList = (searchKeyword: string = '') => {
//   const fetchSearchList = async ({pageParam = 1}): Promise<SearchMovieType> => {
//     const response = await fetchGetDetail(
//       {page: 1},
//       {route: '/3/search/keyword'},
//       {query: `?query=${searchKeyword}&page=${1}`},
//     );

//     console.log('TS_________', response);
//     return response;
//   };

//   return useInfiniteQuery({
//     queryKey: ['fetchSearchList'],
//     queryFn: fetchSearchList,
//     staleTime: 0,
//     enabled: true,
//     getNextPageParam: (lastPage, pages) => lastPage.page + 1,
//   });
// };

// // '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
