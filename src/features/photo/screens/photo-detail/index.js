import {HeightScreen, Theme} from '@src/common/theme';
import React, {useRef} from 'react';
import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import ImageContainer from './image-container';
import NumberFormat from 'react-number-format';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '@components/header';
import {useSelector} from 'react-redux';
import {TypeLoading} from '@src/constants/loading.type';
import PhotoDetailInfoLoader from '../../components/loader/photo-detail-info-loader';
import {typeActionLoading} from '../../redux/photo.type';

const renderTotalData = ({item}) => {
  const {title} = item;
  return (
    <View style={styles.rootInfo}>
      <View style={styles.infoHeader}>
        <View>
          <Text style={[styles.text, styles.name]}>{title}</Text>
          <NumberFormat
            value={20000000}
            displayType={'text'}
            thousandSeparator={true}
            suffix={' đ'}
            renderText={formattedValue => (
              <Text style={[styles.text, styles.price]} numberOfLines={2}>
                {formattedValue}
              </Text>
            )}
          />
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={[styles.text, styles.title]}>Thông số chi tiết</Text>
        <Text style={[styles.text, styles.content]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac
          dignissim condimentum turpis a etiam ipsum ac. Lectus ut egestas
          faucibus neque. Nibh commodo mauris aliquet lacinia congue commodo
          aliquam lectus. Mauris morbi at facilisis id elementum nam ante erat
          sed. Cursus id urna turpis tristique. Eget in non at eros ultrices sem
          tortor. Vel libero viverra ornare sagittis amet, velit blandit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Odio ac dignissim
          condimentum turpis a etiam ipsum ac. Lectus ut egestas faucibus neque.
          Nibh commodo mauris aliquet lacinia congue commodo aliquam lectus.
          Mauris morbi at facilisis id elementum nam ante erat sed. Cursus id
          urna turpis tristique. Eget in non at eros ultrices sem tortor. Vel
          libero viverra ornare sagittis amet, velit blandit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Odio ac dignissim condimentum
          turpis a etiam ipsum ac. Lectus ut egestas faucibus neque. Nibh
          commodo mauris aliquet lacinia congue commodo aliquam lectus. Mauris
          morbi at facilisis id elementum nam ante erat sed. Cursus id urna
          turpis tristique. Eget in non at eros ultrices sem tortor. Vel libero
          viverra ornare sagittis amet, velit blandit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio ac dignissim condimentum
          turpis a etiam ipsum ac. Lectus ut egestas faucibus neque. Nibh
          commodo mauris aliquet lacinia congue commodo aliquam lectus. Mauris
          morbi at facilisis id elementum nam ante erat sed. Cursus id urna
          turpis tristique. Eget in non at eros ultrices sem tortor. Vel libero
          viverra ornare sagittis amet, velit blandit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio ac dignissim condimentum
          turpis a etiam ipsum ac. Lectus ut egestas faucibus neque. Nibh
          commodo mauris aliquet lacinia congue commodo aliquam lectus. Mauris
          morbi at facilisis id elementum nam ante erat sed. Cursus id urna
          turpis tristique. Eget in non at eros ultrices sem tortor. Vel libero
          viverra ornare sagittis amet, velit blandit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Odio ac dignissim condimentum
          turpis a etiam ipsum ac. Lectus ut egestas faucibus neque. Nibh
          commodo mauris aliquet lacinia congue commodo aliquam lectus. Mauris
          morbi at facilisis id elementum nam ante erat sed. Cursus id urna
          turpis tristique. Eget in non at eros ultrices sem tortor. Vel libero
          viverra ornare sagittis amet, velit blandit.
        </Text>
      </View>
    </View>
  );
};

const PhotoDetail = () => {
  // const scrollA = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const {selectedPhoto, cachePhoto, showLoading, actionLoading} = useSelector(
    state => state.photo,
  );

  return (
    <View>
      <Header
        isBack={true}
        isBorder={true}
        styleRoot={styles.stylesRoot1}
        onPress={() => navigation.goBack()}
      />
      {/* <Header
        isBack={true}
        styleRoot={styles.stylesRoot2(scrollA)}
        onPress={() => navigation.goBack()}
      /> */}

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: Theme.backgrounds.white}}
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {y: scrollA}}}],
        //   {useNativeDriver: true}, // <-- Add this
        // )}
        data={[
          showLoading && actionLoading === typeActionLoading.detail
            ? {type: TypeLoading.loader}
            : {...selectedPhoto, type: TypeLoading.normal},
        ]}
        renderItem={({item}) => {
          if (item.type === TypeLoading.loader) {
            return <PhotoDetailInfoLoader />;
          }
          if (item.type === TypeLoading.normal) return renderTotalData({item});
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <ImageContainer
            showLoading={
              showLoading && actionLoading === typeActionLoading.detail
            }
            // styleImage={styles.banner}
            url={selectedPhoto?.url}
          />
        )}
        ListFooterComponent={() => (
          <View style={{height: HeightScreen * 0.12}}>
            {/* <Text>alo lo</Text> */}
          </View>
        )}
      />
    </View>
  );
};

export default PhotoDetail;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.backgrounds.white,
    borderRadius: 25,
  },
  header: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  stylesRoot1: {
    backgroundColor: Theme.backgrounds.transparent,
  },
  imageContainer: {
    height: 280,
    backgroundColor: 'red',
  },
  rootInfo: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Theme.backgrounds.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    top: -25,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Theme.fontFamily.QuicksandMedium,
    color: Theme.colors.notBlack,
  },
  name: {
    fontSize: Theme.size.h4,
  },
  price: {
    fontSize: Theme.size.large,
    marginTop: 4,
    color: Theme.colors.bronze,
  },
  detail: {
    marginTop: 21,
  },
  title: {
    fontSize: Theme.size.h5,
    fontFamily: Theme.fontFamily.QuicksandSemiBold,
  },
  content: {
    lineHeight: 22,
  },
  heart: {padding: 12},
  // stylesRoot2: scrollA => ({
  //   opacity: scrollA.interpolate({
  //     inputRange: [-H_IMAGE, 0, H_IMAGE / 2, H_IMAGE / 2 + 1],
  //     outputRange: [1, 0, 1, 1],
  //   }),
  // }),
  // banner: scrollA => ({
  //   transform: [
  //     {
  //       translateY: scrollA.interpolate({
  //         inputRange: [-H_IMAGE, 0, H_IMAGE, H_IMAGE + 1],
  //         outputRange: [-H_IMAGE / 2, 0, H_IMAGE * 0.75, H_IMAGE * 0.75],
  //       }),
  //     },
  //     {
  //       scale: scrollA.interpolate({
  //         inputRange: [-H_IMAGE, 0, H_IMAGE, H_IMAGE + 1],
  //         outputRange: [2, 1, 0.5, 0.5],
  //       }),
  //     },
  //   ],
  // }),
});

const H_IMAGE = HeightScreen * 0.4;
