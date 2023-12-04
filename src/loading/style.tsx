import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  loadingView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: hp(1.8),
    textAlign: 'center',
    paddingHorizontal: wp(2),
  },
  indicatorContent: {
    maxHeight: hp(5),
  },
  indicatorContainer: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    borderRadius: hp(1),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  otpLottie: {
    width: hp(16),
    height: hp(10),
  },
  content: {},
});

export default styles;
