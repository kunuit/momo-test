import {useNavigation} from '@react-navigation/native';
import {HeightScreen, Theme} from '@src/common/theme';
import Header from '@src/components/header';
import Search from '@src/components/search';
import {TypeLoading} from '@src/constants/loading.type';
import {Router} from '@src/navigation/router';
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PhotoCardLoader from '../../components/loader/photo-card-loader';
import PhotoCard from '../../components/photo-card';
import {typeActionLoading, typePhotos} from '../../redux/photo.type';

const PhotoListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const searchHeader = useRef(new Animated.Value(0)).current;

  const {
    showLoading,
    actionLoading,
    photos,
    errorPhoto,
    pagination,
  } = useSelector(state => state.photo);

  //animation
  const _diff_clamp_scroll_y = Animated.diffClamp(animatedValue, 0, 100);
  let _header_translate_y = _diff_clamp_scroll_y.interpolate({
    inputRange: [0, 20],
    outputRange: [0, -15],
    extrapolateLeft: 'clamp',
  });
  let _header_opacity = _diff_clamp_scroll_y.interpolate({
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderList = item => {
    const _handleDetail = () => {
      dispatch({
        type: typePhotos.fetchPhotoDetail,
        payload: {id: item.id},
      });

      navigation.navigate(Router.PhotoDetail);
    };
    if (item.type === TypeLoading.loader)
      return (
        <PhotoCardLoader styleCard={{marginHorizontal: 10, marginTop: 8}} />
      );
    else
      return (
        <PhotoCard
          item={item}
          onDetail={() => _handleDetail()}
          styleCard={styles.card}
        />
      );
  };

  return (
    <View style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor={Theme.colors.primary}
        // translucent={true}
        barStyle="dark-content"
        showHideTransition="fade"
        // hidden={true}
      />
      <Header
        styleRoot={{position: 'relative'}}
        isBack={true}
        title="Danh sách hình ảnh"
      />
      <Animated.View
        style={[
          styles.searchContainer,
          {
            opacity: _header_opacity,
            transform: [{translateY: _header_translate_y}],
          },
        ]}>
        <Search
          styleInput={styles.search}
          showIcon={true}
          showKeyBoard={false}
        />
      </Animated.View>

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animatedValue}}}],
          {useNativeDriver: true}, // <-- Add this
        )}
        data={[
          ...Object.values(!!photos ? photos : []),
          ...new Array(
            showLoading && actionLoading === typeActionLoading.list ? 5 : 0,
          ).fill({
            type: TypeLoading.loader,
          }),
        ]}
        renderItem={({item}) => renderList(item)}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View style={{height: HeightScreen * 0.05}}></View>
        )}
        ListFooterComponent={() => (
          <View style={{height: HeightScreen * 0.12}}></View>
        )}
        onEndReached={() => {
          if (pagination.totalPage > pagination.currentPage) {
            dispatch({
              type: typePhotos.fetchPhotoList,
            });
          }
        }}
        onEndReachedThreshold={0.001}
      />
    </View>
  );
};

export default PhotoListScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
    justifyContent: 'center',
    alignItem: 'center',
  },
  search: {
    backgroundColor: Theme.backgrounds.white,
  },
  searchContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    top: 90,
  },
  card: {
    marginHorizontal: 10,
    marginTop: 8,
  },
});
