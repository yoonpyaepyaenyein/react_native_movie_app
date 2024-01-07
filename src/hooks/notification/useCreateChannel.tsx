import {useEffect} from 'react';
import {DeviceEventEmitter} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

export const useCreateChannel = (channelId: string) => {
  useEffect(() => {
    // Configure the notification channel (required for Android 8.0+)
    PushNotification.channelExists(channelId, function (exist) {
      if (!exist) {
        PushNotification.createChannel(
          {
            channelId: channelId,
            channelName: 'Push Notifications',
            soundName: 'iphone_message_tone.mp3', // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH,
            vibrate: true,
          },
          created => console.log(`createChannel returned '${created}'`),
        );
      }
    });

    PushNotification.getChannels(function (channel_ids) {
      console.log('Channels List : ', channel_ids); // ['channel_id_1']
    });
  }, []);
};
