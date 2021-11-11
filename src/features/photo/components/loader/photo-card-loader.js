import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WidthScreen, Theme} from '@common/theme';
import {ProductCardLoader} from './card.loader';

const PhotoCardLoader = ({styleCard = {}, ...props}) => {
  return (
    <View style={[styles.root, styleCard]}>
      <ProductCardLoader />
    </View>
  );
};

export default PhotoCardLoader;

const styles = StyleSheet.create({
  root: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingTop: 30,
    paddingVertical: 16,
    borderWidth: 0.5,
    borderColor: Theme.colors.lineBorder,
    borderRadius: 10,
  },
});
