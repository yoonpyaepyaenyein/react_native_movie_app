import {View, StatusBar, TextInput} from 'react-native';
import React from 'react';
import {palette} from '../../theme/colors';
import styles from './Styles';
import SearchIcon from '../../../assets/icons/search';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Controller, useForm} from 'react-hook-form';
import {FlashList} from '@shopify/flash-list';
import SearchCard from '../../components/search/searchCard';

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

export default function SearchMovieScreen({navigation}: any) {
  const {control, handleSubmit} = useForm();

  const renderItem = ({item}: any) => <SearchCard data={item} />;
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor={palette.black}
      />
      <View style={styles.searchContainer}>
        <SearchIcon width={wp(5)} height={wp(5)} />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Search ...."
              value={value}
              onChangeText={onChange}
              placeholderTextColor={palette.primaryDark}
            />
          )}
          name="search"
          defaultValue=""
        />
      </View>
      <FlashList
        data={DATA}
        // showsHorizontalScrollIndicator={false}
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceVertical={true}
      />
    </View>
  );
}
