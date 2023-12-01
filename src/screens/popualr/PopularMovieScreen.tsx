import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {palette} from '../../theme/colors';
import styles from './Styles';
import BackIcon from '../../../assets/icons/back';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlashList} from '@shopify/flash-list';
import Card from '../../components/home/card';
import PopularCardList from '../../components/popular/popularCardList';

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
  {
    title: '7th Item',
  },
  {
    title: '8th  Item',
  },
  {
    title: '9th  Item',
  },
  {
    title: '10th Item',
  },
  {
    title: '11th Item',
  },
  {
    title: '12th Item',
  },
];

const PopularMovieScreen = ({navigation}: any) => {
  const renderItem = ({item}: any) => <PopularCardList data={item} />;
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
        <Text style={styles.headerTitle}>Trending Movies</Text>
      </View>

      <FlashList
        data={DATA}
        showsVerticalScrollIndicator={false}
        // showsHorizontalScrollIndicator={false}
        // horizontal={true}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceVertical={true}
        numColumns={2}
      />
    </View>
  );
};

export default PopularMovieScreen;
