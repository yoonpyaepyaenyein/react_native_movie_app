import {Image, Text, TouchableOpacity, View} from 'react-native';
import ForwardIcon from '../../../assets/icons/forward';
import React from 'react';
import styles from '../../screens/search/Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchCard = (props: any) => {
  const handlePress = () => {
    // Call the goDetailAction prop with the data when TouchableOpacity is pressed
    props.goDetailAction(props.data);
  };
  return (
    <TouchableOpacity
      style={styles.searchListContainer}
      activeOpacity={0.8}
      onPress={handlePress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
        }}
        style={styles.image}
      />
      <View
        style={{
          alignSelf: 'center',
          width: wp(40),
          paddingVertical: hp(2),
        }}>
        <Text style={styles.movieTitle}>{props.data.original_title}</Text>
        {/* <Text style={styles.movieInfo}>{data.title}</Text> */}
      </View>
      <View style={styles.iconContainer}>
        <ForwardIcon width={wp(2)} height={wp(5)} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
