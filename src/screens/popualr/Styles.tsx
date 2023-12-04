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
    color: palette.white,
  },
  contentContainer: {
    // paddingTop: hp(2),
    // marginTop: hp(2),
    // marginBottom: hp(2),
    paddingBottom: hp(3),
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
});

export default styles;
