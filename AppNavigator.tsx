import {View, Text, Platform, DeviceEventEmitter} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './src/navigation/tab/HomeTabNavigator';
import NoInternetScreen from './src/components/noInternet/NoInternetScreen';
import withNetworkSubscription from './src/utils/noDetection/withNetworkSubscription';
import {LoadingModal} from './src/components/modal/loadingModal';
import SplashScreen from 'react-native-splash-screen';
// import AuthenticatedNavigator from './src/navigation/stack/AuthenticatedNavigator';
import Pushy from 'pushy-react-native';

import {useCreateChannel} from './src/hooks/notification/useCreateChannel';
import {usePushy} from './src/hooks/notification/usePushy';
import PushNotification from 'react-native-push-notification';

// Sound.setCategory('Playback');
const CHANNEL_ID = 'cineplus-channel-0';

const showLocalNotification = (title: string, message: string, data: any) => {
  console.log('show local noti');
  PushNotification.localNotification({
    /* Android Only Properties */
    channelId: CHANNEL_ID,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_notification',
    bigLargeIcon: 'ic_launcher',
    priority: 'high',
    /* iOS only properties */
    category: '',
    /* iOS and Android properties */
    id: 0,
    title: title,
    message: message,
    picture: 'ic_launcher',
    userInfo: data,
  });
}; // <-- Add this closing parenthesis

Pushy.setNotificationListener(async (data: any) => {
  // Emit event for noti
  DeviceEventEmitter.emit('dongfangpay.event', data);
  let notificationText;
  let notificationTitle;
  if (typeof data === 'string') return;

  try {
    // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
    // notificationText = JSON.parse(data.message) || 'Welcome to DONGFANG PAY';
    // Notification title
    // notificationTitle = notificationText.title || 'DONGFANG PAY PARTENR';

    notificationText = 'Welcome to CINE PLUS';
    notificationTitle = 'CINE PLUS MOVIE APP';

    showLocalNotification(notificationTitle, notificationText, data);
    // Display basic system notification
    Pushy.setBadge(0);
  } catch (e) {
    console.log('Notification Error : ' + JSON.stringify(data));
    console.log('Notification Type : ', typeof data);
    notificationText = data.message ?? 'Hello';
    notificationTitle = 'CINE PLUS MOVIE APP';
    showLocalNotification(notificationTitle, notificationText.message, data);
    Pushy.setBadge(0);
  }
});

const AppNavigator = () => {
  usePushy();
  useCreateChannel(CHANNEL_ID);
  return (
    <NavigationContainer>
      <HomeTabNavigator />
      <NoInternetScreen />
      <LoadingModal />
    </NavigationContainer>
  );
};

export default AppNavigator;
