import {useEffect} from 'react';
import Pushy, {pushy} from 'pushy-react-native';
import {DeviceEventEmitter, Platform} from 'react-native';

export const usePushy = () => {
  useEffect(() => {
    Pushy.register()
      .then(async deviceToken => {
        console.log('pushy token', deviceToken);
      })
      .catch(err => {
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
