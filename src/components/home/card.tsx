import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const card = ({data}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/poster.jpg')} // Assuming 'movie.image' is the URL
        style={styles.image}
        onError={error => console.error('Error loading image:', error)}
      />
      <Text style={styles.movieTitle}>{data.title}</Text>
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
    // marginLeft: hp(1),

    // Optional: Apply border radius to the image
  },
  movieTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
    // alignContent: 'center',
    alignSelf: 'center',
    paddingTop: hp(1),
    marginTop: hp(1),
  },
});
