import {useEffect, useState} from 'react';
import Pushy from 'pushy-react-native';
import {DeviceEventEmitter, Platform} from 'react-native';
import {useSetAtom} from 'jotai';
import {pushyTokenAtom} from '../../utils/store/atom';

export const usePushy = () => {
  const setPushyToken = useSetAtom(pushyTokenAtom);

  useEffect(() => {
    if (Platform.OS === 'android') {
      Pushy.toggleFCM(false); // undefined function in IOS
      Pushy.setNotificationIcon('ic_stat_onesignal_default'); // undefined function in IOS
    } else {
      Pushy.toggleInAppBanner(true);
    }
    //

    // Register the user for push notifications
    Pushy.register()
      .then(async deviceToken => {
        setPushyToken(deviceToken);
        console.log('pushy token : ', deviceToken);
      })
      .catch(err => {
        // Handle registration errors
        console.error('Pushy Register Errors : ' + err);
      });

    Pushy.setNotificationIcon('ic_launcher.png');

    Pushy.setNotificationClickListener(async data => {
      // console.log('noti action app ::', data);
      if (Platform.OS === 'ios') {
        Pushy.setBadge(0);
      }
      DeviceEventEmitter.emit('dongfangpay.eventNotification', data);
    });

    Pushy.listen();
  }, []);
};
