import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {palette} from '../../utils/theme/colors';
import IsFavoriteIcon from '../../../assets/icons/isFavorite';
import FavoriteIcon from '../../../assets/icons/favorite';

const popularCardList = (props: any) => {
  // console.log('DARA_____++++++++++', props.isFavorite);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={props.detailAction}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`,
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.favIcon}
            onPress={props.favoriteAction}>
            {!props.isFavorite ? (
              <FavoriteIcon
                width={wp(5.9)}
                height={wp(5.9)}
                fill={palette.secondary}
                filColor={palette.secondary}
              />
            ) : (
              <IsFavoriteIcon
                width={wp(5.9)}
                height={wp(5.9)}
                fill={palette.secondary}
                filColor={palette.secondary}
              />
            )}
          </TouchableOpacity>
        </TouchableOpacity>

        <View
          style={{
            width: wp(40),
          }}>
          <Text style={styles.movieTitle}>{props.data.title}</Text>
        </View>
        <Text style={styles.dataTitle}>{props.data.release_date}</Text>
      </View>
    </View>
  );
};

export default popularCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: hp(10),
  },
  //   rowContainer: {
  //     flexDirection: 'row',
  //     width: '100%',
  //   },
  bodyContainer: {
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: hp(2),
    // marginBottom: hp(5),
  },
  image: {
    width: wp(40),
    height: wp(50),
    resizeMode: 'contain',
    marginTop: hp(2),
    borderRadius: hp(1.3),
    overflow: 'hidden',
    // backgroundColor: 'red',
    // borderRadius: hp(1),
  },
  movieTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: wp(3.1),
    alignSelf: 'center',
    marginTop: hp(1.5),
    color: palette.white,
  },
  dataTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(2.7),
    alignSelf: 'center',
    color: palette.secondary,
  },
  favIcon: {
    position: 'absolute',
    top: 22,
    left: 10,
  },
});
