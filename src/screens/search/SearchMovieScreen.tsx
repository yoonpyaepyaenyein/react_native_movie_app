import {
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {palette} from '../../utils/theme/colors';
import styles from './Styles';
import SearchIcon from '../../../assets/icons/search';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Controller, useForm} from 'react-hook-form';
import {FlashList} from '@shopify/flash-list';
import SearchCard from '../../components/search/searchCard';

import {isLoadingAtom} from '../../utils/store/atom';
import {
  SearchMovieResult,
  SearchMovieType,
} from '../../types/searchMovieDataType';
import {useAtom} from 'jotai';
import {DotIndicator} from 'react-native-indicators';
import {
  // useInfiniteMovieList,
  useSearchMovieList,
} from '../../hooks/search/useSearchMovieList';
import LottieView from 'lottie-react-native';
// import useSearchMovieList from '../../hooks/search/useSearchMovieList';

export default function SearchMovieScreen({navigation}: any) {
  const {control, handleSubmit} = useForm();

  //Atom
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  //useState
  const [keyword, setKeyWord] = useState('');

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isSuccess,
    isError,
    isLoading: searchMovieLoading,
  } = useSearchMovieList(keyword);

  useEffect(() => {
    setIsLoading(searchMovieLoading);
  }, [searchMovieLoading]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log('RES ______________>>>>>>', data.pages[0]);
  //   } else if (isError) {
  //     console.log('Popluar List Error', isError);
  //   }
  // }, [data]);

  // if (isLoading) return <ActivityIndicator color={} size={'large'} />;

  const onSubmit = (data: any) => {
    console.log(data);
    setKeyWord(data.search);
  };

  const searchMovies: SearchMovieResult[] =
    data && data.pages
      ? data.pages.flatMap(page => (page.results ? page.results : []))
      : [];

  // console.log('search:::', searchMovies);

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    return isFetching && searchMovies.length > 0 ? (
      <View>
        <DotIndicator color={palette.primary} size={6} count={4} />
      </View>
    ) : null;
  };

  const renderItem = ({item}: any) => (
    <SearchCard
      data={item}
      goDetailAction={() =>
        navigation.navigate('MovieDetail', {searchData: item})
      }
    />
  );
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
        <TouchableOpacity
          style={styles.enterBtnContainer}
          activeOpacity={0.7}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.enterBtnText}>Enter</Text>
        </TouchableOpacity>
      </View>
      <FlashList
        data={searchMovies}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        estimatedItemSize={200}
        alwaysBounceVertical={true}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                height: hp(90),
                width: wp(100),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <LottieView
                style={{
                  width: wp(80),
                  height: hp(70),
                  marginTop: -hp(30),
                  marginRight: hp(3),
                }}
                source={require('@assets/icons/SearchLottie.json')}
                autoPlay
                loop={true}
              />
              <Text style={styles.emptyContent}>
                Let's search for movies in search box
              </Text>
              {/* <Text style={styles.emptyContent}>
                You will search a lot of interesting movies in seach box.
              </Text> */}
            </View>
          );
        }}
      />
    </View>
  );
}
