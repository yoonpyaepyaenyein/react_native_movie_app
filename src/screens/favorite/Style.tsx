import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../utils/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    // padding: hp(2),
  },
  appBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp(4),
    marginLeft: hp(2),
    marginTop: hp(2),
  },
  contentContainer: {
    // paddingTop: hp(2),
    // marginTop: hp(2),
    // marginBottom: hp(2),
    paddingBottom: hp(13),
  },
  icon: {
    marginLeft: hp(2),
    marginTop: hp(2),
  },
  showMoreBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: hp(2),
  },
  emptyText: {
    fontFamily: 'Poppins-SemiBold',
    color: palette.white,
    fontSize: wp(4),
    alignSelf: 'center',
    marginTop: -hp(8),
  },
  emptyContent: {
    fontFamily: 'Poppins-Regular',
    color: palette.grey,
    fontSize: wp(3),
    width: wp(80),
    alignSelf: 'center',
    marginTop: hp(2),
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});

export default styles;
