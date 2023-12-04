import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootStackScreen from '../stack/RootStackScreen';
import FavoriteStackScreen from '../stack/FavoriteStackScreen';
import React from 'react';
import {palette} from '../../utils/theme/colors';
import SearchIcon from '../../../assets/icons/search';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Style';
import ForwardIcon from '../../../assets/icons/forward';
import {View} from 'react-native';
import HomeIcon from '../../../assets/icons/home';
import LottieView from 'lottie-react-native';
import FavoriteIcon from '../../../assets/icons/favorite';
import FavoriteTabIcon from '../../../assets/icons/favoriteIcon';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const Stacks: string[] = ['Popular', 'Search', 'MovieDetail'];

const gradientColors = ['#3b3939', '#000000'];

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarBackground: () => (
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.05)']}
            style={{
              height: 70,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        ),
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        // tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.grey,

        tabBarActiveBackgroundColor: palette.primary,
        tabBarHideOnKeyboard: true,
        tabBarInactiveLabelStyle: styles.tabInactiveLabel,

        tabBarActiveTintColor: palette.white,
        // tabBarInactiveBackgroundColor: palette.white,

        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontSize: wp(3.4),
          // paddingBottom: hp(1),
          fontFamily: 'Poppins-SemiBold',

          // color: palette.black,
        },
        // tabBarLabelStyle: {
        //   ...styles.tabLabel, // Apply your tabLabel styles here
        //   color:
        //     route.state?.index === route.key ? palette.white : palette.black, // Conditionally set color
        // }, // Apply your tabLabel styles here
        tabBarItemStyle: styles.tab,
        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'RootStack':
              iconName = focused ? (
                <View style={styles.icon}>
                  <LottieView
                    style={{width: wp(7), height: hp(7), alignSelf: 'center'}}
                    source={require('@assets/icons/homeLottie.json')}
                    autoPlay
                    loop={true}
                  />
                </View>
              ) : (
                <View style={styles.icon}>
                  <HomeIcon width={wp(8.5)} height={wp(4.5)} />
                </View>
              );
              break;
            case 'FavoriteStack':
              iconName = focused ? (
                <View style={styles.icon}>
                  <LottieView
                    style={{width: wp(30), height: hp(15), alignSelf: 'center'}}
                    source={require('@assets/icons/favoriteLottie.json')}
                    autoPlay
                    loop={true}
                  />
                </View>
              ) : (
                <View style={styles.icon}>
                  <FavoriteIcon
                    width={wp(5)}
                    height={wp(5)}
                    color={palette.primary}
                    fillColor={palette.primary}
                  />
                </View>
              );
              break;
            default:
              return null;
          }
          return iconName;
        },

        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (Stacks.includes(routeName)) {
            return {display: 'none'};
          }
          return {
            backgroundColor: '#3b3939',
            position: 'absolute',
            elevation: 1,
            height: hp(9.5),
            // padding: hp(1.3),
            paddingHorizontal: hp(1.3),
            borderTopLeftRadius: wp(6.5),
            borderTopRightRadius: wp(6.5),
            shadowColor: palette.primary,
            shadowOffset: {
              width: 0,
              height: 1,
            },

            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            borderColor: '#3b3939',
            borderWidth: wp(0.5),
          };
        })(route),
      })}
      sceneContainerStyle={{backgroundColor: 'transparent'}}>
      <Tab.Screen
        name="RootStack"
        component={RootStackScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStackScreen}
        options={{title: 'Favorite'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

// import {View, Text} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// import AnimatedLottieView from 'lottie-react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// //StackNavigator
// import HomeStackNavigator from '../stack/HomeStackNavigator';
// import SearchStackNavigator from '../stack/SearchStackNavigator';
// import FavoriteStackNavigator from '../stack/FavoriteStackNavigator';

// //icons
// import HomeIcon from '../../../assets/icons/HomeIcon';
// import SearchIcon from '../../../assets/icons/SearchIcon';
// import FavoriteIcon from '../../../assets/icons/FavoriteIcon';

// //utils
// import {movieColor} from '../../utils/theme/color';

// const Tab = createBottomTabNavigator();

// const stack = ['HomeDetail', 'SearchDetail', 'FavoriteDetail'];

// const HomeTabNavigator = () => {
//   let title = 'HomeStack';
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarActiveTintColor: movieColor.primary,
//         tabBarInactiveBackgroundColor: movieColor.grey,
//         tabBarHideOnKeyboard: true,
//         unmountOnBlur: true,
//         tabBarLabelStyle: {
//           fontSize: hp(1.7),
//           paddingBottom: hp(1),
//           fontFamily: 'PTSans-Bold',
//         },

//         tabBarIcon: ({focused}) => {
//           let iconName;
//           switch (route.name) {
//             case 'HomeStack':
//               if (focused)
//                 iconName = (
//                   <AnimatedLottieView
//                     source={require('../../../assets/icons/animated/homeFocus.json')}
//                     style={{width: hp(16), height: hp(10)}}
//                     autoPlay
//                     loop={true}
//                   />
//                 );
//               else iconName = <HomeIcon />;
//               break;

//             case 'SearchStack':
//               if (focused)
//                 iconName = (
//                   <AnimatedLottieView
//                     source={require('../../../assets/icons/animated/SearchFocus.json')}
//                     style={{width: hp(10), height: hp(6)}}
//                     autoPlay
//                     loop={true}
//                   />
//                 );
//               else
//                 iconName = (
//                   <SearchIcon
//                     width={wp(6)}
//                     height={wp(6)}
//                     fill={movieColor.grey_shade200}
//                   />
//                 );
//               break;

//             case 'FavoriteStack':
//               if (focused)
//                 iconName = (
//                   <AnimatedLottieView
//                     source={require('../../../assets/icons/animated/favorite.json')}
//                     style={{width: hp(10), height: hp(8)}}
//                     autoPlay
//                     loop={true}
//                   />
//                 );
//               else iconName = <FavoriteIcon color="#D8D8D8" />;
//               break;

//             default:
//               break;
//           }
//           return iconName;
//         },

//         tabBarStyle: (route => {
//           const routeName = getFocusedRouteNameFromRoute(route) ?? '';
//           if (stack.includes(routeName)) {
//             return {display: 'none'};
//           }
//           return {
//             backgroundColor: '#F5F5F5',
//             position: 'absolute',
//             elevation: 0.7,
//             height: hp(10),
//             paddingTop: hp(1.3),
//             paddingHorizontal: hp(1.3),
//           };
//         })(route),
//       })}>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStackNavigator}
//         options={{title: 'Home'}}
//       />
//       <Tab.Screen
//         name="SearchStack"
//         component={SearchStackNavigator}
//         options={{title: 'Search'}}
//       />
//       <Tab.Screen
//         name="FavoriteStack"
//         component={FavoriteStackNavigator}
//         options={{title: 'Favorite'}}
//       />
//     </Tab.Navigator>
//   );
// };

// export default HomeTabNavigator;
