import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import {useAtomValue} from 'jotai';
import {netAtom} from '../../utils/store/atom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../utils/theme/colors';
import LottieView from 'lottie-react-native';

const NoInternetScreen = () => {
  const net = useAtomValue(netAtom);

  if (net) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <StatusBar barStyle={'light-content'} backgroundColor={palette.black} />
      <View style={styles.container}>
        <View>
          <LottieView
            style={{width: wp(50), height: hp(30), alignSelf: 'center'}}
            source={require('@assets/icons/noInternetConnection.json')}
            autoPlay
            loop={true}
          />
          {/* <NoInternetConnection /> */}
        </View>
        <Text style={styles.text}>Sorry</Text>
        <Text style={styles.subText}>Internet Connection is unavailable</Text>
        <TouchableOpacity>
          <Text style={styles.tryAgainBtnText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)', transparent color
    backgroundColor: palette.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: palette.black,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  //   image: {
  //     width: 200,
  //     height: 200,
  //     resizeMode: 'contain',
  //     marginBottom: 20,
  //   },
  text: {
    fontSize: wp(3),
    // fontWeight: 'bold',
    marginBottom: 10,
    marginTop: hp(2),
    fontFamily: 'Poppins-Medium',
  },
  subText: {
    fontSize: wp(4),
    color: palette.secondary,
    textAlign: 'center',
    // paddingHorizontal: 40,
    marginBottom: hp(2),
    fontFamily: 'Poppins-Regular',
  },
  tryAgainBtnText: {
    fontSize: wp(4),
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
});
