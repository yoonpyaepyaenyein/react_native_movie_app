import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const popularCardList = ({data}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Image
          source={require('@assets/images/poster.jpg')}
          style={styles.image}
        />
        <Text style={styles.movieTitle}>{data.title}</Text>
      </View>
    </View>
  );
};

export default popularCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //   rowContainer: {
  //     flexDirection: 'row',
  //     width: '100%',
  //   },
  bodyContainer: {
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  image: {
    width: wp(40),
    height: wp(50),
    resizeMode: 'cover',
    marginTop: hp(2),
    borderRadius: hp(1.3),
    overflow: 'hidden',
    // backgroundColor: 'red',
    // borderRadius: hp(1),
  },
  movieTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.5),
    alignSelf: 'center',
    marginTop: hp(1.5),
  },
});
