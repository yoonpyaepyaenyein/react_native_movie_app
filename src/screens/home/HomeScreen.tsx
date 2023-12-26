import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {palette} from '../../utils/theme/colors';
import SearchIcon from '../../../assets/icons/search';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlashList} from '@shopify/flash-list';
import Card from '../../components/home/card';
import UpcomingCard from '../../components/home/upComingCard';
import {usePopular} from '../../hooks/popular/usePopular';
import {usePopularList} from '../../hooks/popular/usePopuarList';
import {useUpcomingMovie} from '../../hooks/upcoming/useUpcomingMovie';
import {useAtom} from 'jotai';
import {isLoadingAtom} from '../../utils/store/atom';
import {useNowPlayingMovie} from '../../hooks/nowPlaying/useNowPlayingMovie';

const HomeScreen = ({navigation}: any) => {
  const {isSuccess, isError, data, isLoading} = usePopularList();
  const [loading, setIsLoading] = useAtom(isLoadingAtom);

  const {
    isSuccess: upcomingSuccess,
    isError: upcomingError,
    data: responseData,
    isLoading: upcomingLoading,
  } = useUpcomingMovie();

  const {
    isSuccess: nowPlayingSuccess,
    isError: nowPlayingError,
    data: nowPlayingResponseData,
    isLoading: nowPlayingLoading,
  } = useNowPlayingMovie();
  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  // useEffect(() => {
  //   setIsLoading(upcomingLoading);
  // }, [upcomingLoading]);

  useEffect(() => {
    if (nowPlayingSuccess) {
      // console.log('NPRD_______', nowPlayingResponseData);
    } else if (nowPlayingError) {
      console.log('NPRD ERROR');
    }
  }, [nowPlayingResponseData]);

  if (isLoading) return <ActivityIndicator color={'#fff'} size={'small'} />;

  const renderItem = ({item}: any) => (
    <Card
      data={item}
      detailAction={() =>
        navigation.navigate('MovieDetail', {searchData: item})
      }
    />
  );

  const renderFavoriteItem = ({item}: any) => (
    <UpcomingCard
      data={item}
      detailAction={() =>
        navigation.navigate('MovieDetail', {searchData: item})
      }
    />
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: hp(15)}}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={palette.black}
      />
      <Text style={styles.headerTitle}>Welcome to</Text>
      <View style={styles.headeRowContainer}>
        <Text style={styles.subHeaderTitle}>Cine Plus</Text>
        <View style={styles.subRowContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Search')}>
            <SearchIcon width={wp(5)} height={wp(5)} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Popuar Trending Movie */}
      <View style={[styles.headeRowContainer, {marginTop: hp(4)}]}>
        <Text style={[styles.headerTitle, {fontFamily: 'Poppins-Medium'}]}>
          Popular Movies
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Popular')}>
          <Text style={styles.seeAllBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlashList
          data={data?.pages[0]?.results}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          estimatedItemSize={200}
          alwaysBounceHorizontal={true}
        />
      </View>

      {/* Now Playing Movie  */}
      <View>
        <View style={[styles.headeRowContainer, {marginTop: hp(4)}]}>
          <Text style={[styles.headerTitle, {fontFamily: 'Poppins-Medium'}]}>
            Now Playing Movie
          </Text>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('trending see all')}></TouchableOpacity> */}
        </View>

        {!nowPlayingLoading ? (
          <>
            <FlashList
              data={nowPlayingResponseData?.results}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderFavoriteItem}
              estimatedItemSize={200}
              alwaysBounceHorizontal={true}
            />
          </>
        ) : (
          <ActivityIndicator color={'#fff'} size={'small'} />
        )}
      </View>

      {/* Your Upcoing Movie  */}
      <View>
        <View style={[styles.headeRowContainer, {marginTop: hp(4)}]}>
          <Text style={[styles.headerTitle, {fontFamily: 'Poppins-Medium'}]}>
            Upcoming Movies
          </Text>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('trending see all')}></TouchableOpacity> */}
        </View>

        {!upcomingLoading ? (
          <>
            <FlashList
              data={responseData?.results}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderFavoriteItem}
              estimatedItemSize={200}
              alwaysBounceHorizontal={true}
            />
          </>
        ) : (
          <ActivityIndicator color={'#fff'} size={'small'} />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
