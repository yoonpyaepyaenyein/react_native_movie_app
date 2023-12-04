import {useAtomValue} from 'jotai';
import React, {FC} from 'react';
import {View, Text, Modal, ModalProps, StyleSheet} from 'react-native';
import {BarIndicator} from 'react-native-indicators';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isLoadingAtom} from '../../utils/store/atom';

export const LoadingModal = () => {
  const isLoading = useAtomValue(isLoadingAtom);

  if (!isLoading) return null;

  return (
    <Modal
      style={styles.loadingView}
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
      animationType="fade">
      <View style={styles.indicatorContainer}>
        <View style={styles.content}>
          <BarIndicator
            style={styles.indicatorContent}
            color="#FFF"
            size={25}
            count={5}
          />
          <Text style={styles.indicatorText}>Please Wait ...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    fontFamily: 'Poppins-Medium',
    color: '#FFF',
    fontSize: hp(1.8),
    // paddingBottom: 10,
    textAlign: 'center',
    paddingHorizontal: wp(2),
  },
  indicatorContent: {
    maxHeight: hp(5),
  },
  indicatorContainer: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    borderRadius: hp(1),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: 'rgba(52, 52, 52, 0.50)',
    borderRadius: hp(1),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
  },
});
