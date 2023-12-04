import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  UpcomingMovieResult,
  UpcomingMovieType,
} from '../../types/UpcomingMovieType';
import {palette} from '../../utils/theme/colors';

const favoriteCard = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.detailAction}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={{width: wp(60)}}>
        <Text style={styles.movieTitle}>{props.data.original_title}</Text>
      </View>
    </View>
  );
};

export default favoriteCard;

const styles = StyleSheet.create({
  container: {
    paddingLeft: hp(1),
  },
  image: {
    width: wp(60), // Specify the width of the image
    height: hp(18), // Specify the height of the image
    resizeMode: 'contain', // Adjust the image's size to cover the specified dimensions
    borderRadius: 10,
    // marginLeft: hp(1),
    // marginLeft: hp(1),

    // Optional: Apply border radius to the image
  },
  movieTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
    // alignContent: 'center',
    alignSelf: 'center',
    paddingTop: hp(1),
    marginTop: hp(0.6),
    color: palette.white,
  },
});
