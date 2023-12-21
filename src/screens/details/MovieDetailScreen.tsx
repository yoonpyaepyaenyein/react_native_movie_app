import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {palette} from '../../utils/theme/colors';
import styles from './Style';
import {useSearchMovieDetail} from '../../hooks/search/useSearchMovieDetail';
import {favoriteMovieListAtom, isLoadingAtom} from '../../utils/store/atom';
import {useAtom} from 'jotai';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackIcon from '../../../assets/icons/back';
import FavoriteIcon from '../../../assets/icons/favorite';
import IsFavoriteIcon from '../../../assets/icons/isFavorite';
import Toast from 'react-native-simple-toast';

export default function SearchDetailScreen({route, navigation}: any) {
  const {searchData} = route.params;

  //Atom
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [favoriteList, setFavoriteList] = useAtom(favoriteMovieListAtom);

  const {
    isSuccess,
    isError,
    isFetching,
    isLoading: searchDetailLoading,
    data: responseData,
  } = useSearchMovieDetail(searchData.id);

  useEffect(() => {
    setIsLoading(searchDetailLoading);
  }, [searchDetailLoading]);

  let isFavorite: any;
  isFavorite = favoriteList.some(movie => movie.id === responseData?.id);

  const addToFavorite = (item: any) => {
    // Check if the item is already in the favorite list
    // const isFavorite = favoriteList.some(movie => movie.id === item.id);

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

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'transparent'} // Set StatusBar background to transparent
        translucent={true}
      />

      <View>
        {responseData?.poster_path != null ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${responseData?.poster_path}`,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('@assets/images/poster.jpg')}
            style={styles.image}
          />
        )}
        {/* BackIcon */}
        <TouchableOpacity
          style={{position: 'absolute', top: 40, left: 20}}
          onPress={() => navigation.goBack()}>
          <BackIcon width={wp(5)} height={wp(5)} />
        </TouchableOpacity>

        {/* Favorite Screen */}
        <TouchableOpacity
          style={styles.favIcon}
          onPress={() => addToFavorite(responseData)}>
          {/* <IsFavoriteIcon
            width={wp(6)}
            height={wp(6)}
            // fill={palette.secondary}
            // filColor={palette.secondary}
          /> */}
          {!isFavorite ? (
            <FavoriteIcon
              width={wp(5.9)}
              height={wp(5.9)}
              fill={palette.secondary}
              filColor={palette.secondary}
            />
          ) : (
            <IsFavoriteIcon
              width={wp(5.9)}
              height={wp(5.9)}
              fill={palette.secondary}
              filColor={palette.secondary}
            />
          )}
        </TouchableOpacity>
        <LinearGradient
          colors={['transparent', 'rgba(23, 23,23, 0.8)', palette.black]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.gradient}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {responseData?.original_title != null
            ? responseData.original_title
            : '_________'}
        </Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.status}>
            {responseData?.status != null ? responseData.status : 'Released'}{' '}
          </Text>
          <Text style={[styles.status, {paddingLeft: hp(1)}]}>
            {responseData?.release_date != null
              ? responseData.release_date
              : '2001-10-25'}{' '}
            ·
          </Text>
          <Text style={[styles.status, {paddingLeft: hp(1)}]}>
            {responseData?.runtime != null ? responseData.runtime : 100} min
          </Text>
        </View>
      </View>

      <View style={{marginHorizontal: hp(2)}}>
        <Text style={styles.storyLine}>Story Line 🎬 </Text>
        <Text style={styles.overView}>
          {responseData?.overview != null
            ? responseData.overview
            : 'The DVD MY DEAR FRIEND opens the retrospective series of work of Chico Buarque, highlighting some of his passions: the city of Rio de Janeiro and its partners and friends.  "I kept an almost alien look on Rio  I still have a relationship with the city of wonder. "  Friends, partners and songs will be happening in the first episode of the series, in a relaxed and intimate way.'}
        </Text>
      </View>
    </ScrollView>
  );
}
