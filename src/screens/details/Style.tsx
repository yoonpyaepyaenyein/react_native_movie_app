import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../utils/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
  },
  image: {
    width: wp(100),
    height: hp(40),
    // backgroundColor: 'red',
    resizeMode: 'center',
    overflow: 'hidden',
  },
  gradient: {
    width: wp(100),
    height: hp(7),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
  },
  infoContainer: {
    // marginTop: -hp(6),
    width: wp(90),
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: palette.white,
    fontSize: wp(5),
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  subTitleContainer: {flexDirection: 'row', marginTop: hp(1)},
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.2),
    color: palette.white,
    marginTop: hp(2),
  },
  storyLine: {
    color: palette.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp(3.5),
    marginTop: hp(2),
  },
  overView: {
    color: palette.grey,
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3.3),
    marginTop: hp(2),
    letterSpacing: 1,
  },
  favIcon: {
    position: 'absolute',
    top: 43,
    right: 20,
  },
});

export default styles;
