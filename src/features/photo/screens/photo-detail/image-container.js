import {HeightScreen, Theme} from '@src/common/theme';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ImageProductLoader} from '../../components/loader/card.loader';

const ImageContainer = ({showLoading, styleImage, url}) => {
  return (
    <View style={styles.productDetailImageContainer}>
      {showLoading ? (
        <ImageProductLoader />
      ) : (
        <Image
          style={styles.productDetailImage}
          source={{
            uri: url,
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  productDetailImageContainer: {
    width: '100%',
    height: HeightScreen * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'ios' ? 44 + 8 : StatusBar.currentHeight + 8,
  },
  productDetailImage: {
    width: '100%',
    height: '100%',
    // flex: 1,
    backgroundColor: Theme.backgrounds.paper,
    resizeMode: 'contain',
  },
  activeDot: {
    backgroundColor: Theme.colors.bronze,
    width: 25,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
export default ImageContainer;
