import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import {palette} from '../../utils/theme/colors';
import {FlashList} from '@shopify/flash-list';
import PopularCardList from '../../components/popular/popularCardList';
import {useAtom} from 'jotai';
import {favoriteMovieListAtom} from '../../utils/store/atom';
import {PopularMovieResult} from '../../types/popularMovieDataType';
import Toast from 'react-native-simple-toast';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FavoriteScreen = ({navigation}: any) => {
  const [favoriteList, setFavoriteList] = useAtom(favoriteMovieListAtom);

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

  const renderItem = ({item}: any) => (
    <PopularCardList
      data={item}
      isFavorite={favoriteList.some(movie => movie.id === item.id)}
      detailAction={() =>
        navigation.navigate('MovieDetail', {searchData: item})
      }
      favoriteAction={() => addToFavorite(item)}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={palette.black}
      />

      <FlashList
        data={favoriteList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceVertical={true}
        numColumns={2}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
        ListEmptyComponent={() => {
          return (
            <View>
              <LottieView
                style={{width: wp(80), height: hp(60), alignSelf: 'center'}}
                source={require('@assets/icons/emptyFavorite.json')}
                autoPlay
                loop={true}
              />
              <Text style={styles.emptyText}>Favoritelist is empty.</Text>
              <Text style={styles.emptyContent}>
                You don't have any movies in the favoritelist yet. You will find
                a lot of interesting movies on our "Home" page.
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FavoriteScreen;
