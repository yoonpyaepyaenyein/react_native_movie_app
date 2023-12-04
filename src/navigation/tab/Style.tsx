import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {palette} from '../../utils/theme/colors';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: palette.black,
    width: wp(93),
    alignSelf: 'center',
    borderRadius: hp(1.8),
    // marginVertical: hp(0.5),
    // height: hp(6),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    borderRadius: hp(10),
    height: hp(5),
    marginTop: hp(2),
    flexDirection: 'row',

    // backgroundColor: 'red',

    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  tabLabel: {
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Medium',
    color: palette.black,
    // position: 'absolute',
    // right: 60,
  },
  icon: {
    // backgroundColor: 'green',
    // position: 'absolute',
    // left: 30,
    // top: -10,
    marginTop: -hp(0.5),
    paddingLeft: hp(1),
  },
  tabInactiveLabel: {
    color: palette.white,
  },
});

export default styles;
