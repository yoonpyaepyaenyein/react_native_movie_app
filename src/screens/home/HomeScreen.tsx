import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {palette} from '../../theme/colors';
import SearchIcon from '../../../assets/icons/search';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlashList} from '@shopify/flash-list';
import Card from '../../components/home/card';
import FavoriteCard from '../../components/home/favoriteCard';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: '4th Item',
  },
  {
    title: '5th Item',
  },
  {
    title: '6th Item',
  },
];

const HomeScreen = ({navigation}: any) => {
  const renderItem = ({item}: any) => <Card data={item} />;

  const renderFavoriteItem = ({item}: any) => <FavoriteCard data={item} />;

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={palette.black}
      />
      <Text style={styles.headerTitle}>Welcome to</Text>
      <View style={styles.headeRowContainer}>
        <Text style={styles.subHeaderTitle}>Cine Circle</Text>
        <View style={styles.subRowContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Search')}>
            <SearchIcon width={wp(5)} height={wp(5)} />
          </TouchableOpacity>
          {/* <SearchIcon width={wp(5)} height={wp(5)} /> */}
        </View>
      </View>

      {/* Popuar Trending Movie */}
      <View style={[styles.headeRowContainer, {marginTop: hp(4)}]}>
        <Text style={[styles.headerTitle, {fontFamily: 'Poppins-Medium'}]}>
          Trending Movies
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Popular')}>
          <Text style={styles.seeAllBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceHorizontal={true}
      />

      {/* Your Favorite Movie  */}
      <View style={[styles.headeRowContainer, {marginTop: hp(4)}]}>
        <Text style={[styles.headerTitle, {fontFamily: 'Poppins-Medium'}]}>
          Your Favorite Movies
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.log('trending see all')}>
          <Text style={styles.seeAllBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.title}
        renderItem={renderFavoriteItem}
        estimatedItemSize={200}
        alwaysBounceHorizontal={true}
      />
    </View>
  );
};

export default HomeScreen;
