import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: hp(2),
  },
  headerTitle: {
    fontSize: wp(4),
    fontFamily: 'Poppins-Regular',
  },
  headeRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderTitle: {
    fontSize: wp(5),
    fontFamily: 'Poppins-Regular',
  },
  subRowContainer: {
    // flexDirection: 'row',
    // width: wp(15),
    // backgroundColor: palette.secondary,
    justifyContent: 'space-between',
  },
  seeAllBtn: {
    color: palette.primary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp(3),
  },
  contentContainer: {
    paddingTop: hp(3),
  },
});

export default styles;
