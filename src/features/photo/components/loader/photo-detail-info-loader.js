import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProductDetailInfoLoader} from './card.loader';

const PhotoDetailInfoLoader = ({styleRoot, ...props}) => {
  return (
    <View style={[styles.root, styleRoot]}>
      <ProductDetailInfoLoader />
    </View>
  );
};

export default PhotoDetailInfoLoader;

const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
  },
});
