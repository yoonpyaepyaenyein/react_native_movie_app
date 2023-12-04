import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {palette} from '../../utils/theme/colors';
import styles from './Styles';
import BackIcon from '../../../assets/icons/back';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlashList} from '@shopify/flash-list';
import Card from '../../components/home/card';
import PopularCardList from '../../components/popular/popularCardList';
import {usePopularList} from '../../hooks/popular/usePopuarList';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {favoriteMovieListAtom, isLoadingAtom} from '../../utils/store/atom';
import {
  PopularMovieResult,
  PopularType,
} from '../../types/popularMovieDataType';
import SearchIcon from '../../../assets/icons/search';
import {DotIndicator} from 'react-native-indicators';
import Toast from 'react-native-simple-toast';

interface PopularMovieScreenProps {
  navigation: any; // Replace 'any' with the correct type for your navigation prop
  route: any; // Replace 'any' with the correct type for your route prop
}

const PopularMovieScreen: React.FC<PopularMovieScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    isSuccess,
    isError,
    data,
    isLoading: popularLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = usePopularList();
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [favoriteList, setFavoriteList] = useAtom(favoriteMovieListAtom);
  // const setMovieList = useSetAtom(MovieListAtom);

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log('RES::::::::::::', data);
  //     // setMovieList(data);
  //     // console.log('list:::', listData);
  //   } else if (isError) {
  //     console.log('Popluar List Error', isError);
  //   }
  // }, []);

  useEffect(() => {
    setIsLoading(popularLoading);
  }, [popularLoading]);

  const popularMovies: PopularMovieResult[] =
    data && data.pages
      ? data.pages.flatMap(page => (page.results ? page.results : []))
      : [];

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const addToFavorite = (item: PopularMovieResult) => {
    // Check if the item is already in the favorite list
    const isFavorite = favoriteList.some(movie => movie.id === item.id);

    // If it's in the favorite list, remove it; otherwise, add it
    if (isFavorite) {
      const updatedList = favoriteList.filter(movie => movie.id !== item.id);
      setFavoriteList(updatedList);
      Toast.showWithGravity('Successfully Removed.', Toast.SHORT, Toast.CENTER);
      console.log('___________', favoriteList.length);
    } else {
      setFavoriteList([...favoriteList, item]);
      Toast.showWithGravity('Successfully Added.', Toast.SHORT, Toast.CENTER);
      console.log('..............', favoriteList.length);
    }
  };

  const renderFooter = () => {
    return isFetching && (popularMovies.length ?? 0) > 0 ? (
      <View>
        <DotIndicator color={palette.primary} size={6} count={4} />
      </View>
    ) : null;
  };

  if (isLoading) return <ActivityIndicator color={'#fff'} size={'small'} />;

  const renderItem = ({item}: any) => (
    <PopularCardList
      data={item}
      detailAction={() =>
        navigation.navigate('MovieDetail', {
          searchData: item,
        })
      }
      favoriteAction={() => addToFavorite(item)}
      isFavorite={favoriteList.some(movie => movie.id === item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={palette.black}
      />
      <View style={styles.appBarRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <BackIcon width={wp(5)} height={wp(5)} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Popular Movies</Text>
      </View>

      <FlashList
        data={popularMovies}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceVertical={true}
        numColumns={2}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>No data available</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PopularMovieScreen;
