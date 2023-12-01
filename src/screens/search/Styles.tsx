import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.black,
    padding: hp(2),
  },
  searchContainer: {
    // width: wp(100),
    paddingVertical: hp(1),
    backgroundColor: palette.grey,
    borderRadius: wp(1.8),
    paddingHorizontal: hp(1),
    flexDirection: 'row',
    // alignItems: 'center',
  },
  input: {
    width: wp(80),
    height: hp(5),
    // backgroundColor: 'red',
    marginLeft: hp(5),
    color: '#000',
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
  },
  contentContainer: {},
  image: {
    width: wp(37),
    height: wp(25),
    overflow: 'hidden',
    resizeMode: 'contain',
    borderRadius: hp(2),
  },
  searchListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  iconContainer: {
    alignSelf: 'center',
  },
  movieTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp(4),
    color: palette.white,
    // alignContent: 'flex-start',
    // alignSelf: 'flex-start',
  },
  movieInfo: {
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
    // alignContent: 'flex-start',
    // alignSelf: 'flex-start',
    // textAlign: 'left',
  },
});

export default styles;
