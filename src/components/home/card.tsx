import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PopularMovieResult} from '../../types/popularMovieDataType';
import {palette} from '../../utils/theme/colors';

const card = (props: any) => {
  // useEffect(() => {
  //   console.log(
  //     'Image dimensions:',
  //     Image.getSize(
  //       `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
  //       (width, height) => console.log(width, height),
  //       // error => console.error('Error getting image dimensions:', error),
  //     ),
  //   );
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.detailAction}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
          }} // Assuming 'movie.image' is the URL
          style={styles.image}
          onError={error => console.error('Error loading image:', error)}
        />
      </TouchableOpacity>

      <View style={{width: wp(38)}}>
        <Text style={styles.originalTitle}>{props.data.original_title}</Text>
      </View>
      {/* <Text style={styles.movieTitle}>{data.release_date}</Text> */}
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    paddingLeft: hp(1),
  },
  image: {
    width: wp(38), // Specify the width of the image
    height: hp(20), // Specify the height of the image
    resizeMode: 'contain', // Adjust the image's size to cover the specified dimensions
    borderRadius: 10,
    marginLeft: hp(0.6),
  },
  movieTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
    // alignContent: 'center',
    alignSelf: 'center',
    // paddingTop: hp(1),
    // marginTop: hp(1),
  },
  originalTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(3),
    textAlign: 'center',
    marginTop: hp(1),
    color: palette.white,
  },
});
