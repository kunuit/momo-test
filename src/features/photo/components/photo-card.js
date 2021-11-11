import {Theme, WidthScreen} from '@src/common/theme';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const PhotoCard = ({
  index,
  styleCard = {},
  item,
  onDetail,
  onAddToCart,
  ...props
}) => {
  return (
    <View style={[styles.root, styleCard]}>
      <TouchableHighlight
        activeOpacity={0.4}
        style={{flex: 1}}
        underlayColor={Theme.backgrounds.white}
        onPress={() => onDetail()}>
        <View style={styles.touchable}>
          <View
            style={[
              styles.left,
              // {
              //   backgroundColor:
              //     index % 2 !== 0
              //       ? Theme.colors.activeGray
              //       : Theme.backgrounds.white,
              // },
            ]}>
            <ImageBackground
              source={{
                uri: item.thumbnailUrl,
              }}
              style={{
                flex: 1,
                marginVertical: 4,
              }}
              imageStyle={{
                resizeMode: 'contain',
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={[
              styles.center,
              {
                // backgroundColor: 'red',
              },
            ]}>
            <View style={styles.content}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>20.000.000đ</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  root: {
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 2,
    // marginHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Theme.colors.lineBorder,
    borderRadius: 10,
  },
  touchable: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  left: {
    flex: 0.3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  center: {
    flex: 0.62,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
  },
  right: {
    flex: 0.1,
    paddingHorizontal: 8,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    // borderWidth: 0.5,
    // borderColor: Theme.colors.dGrey,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontFamily: Theme.fontFamily.QuicksandBold,
    fontSize: 14,
    color: Theme.colors.notBlack,
  },
  description: {
    fontFamily: Theme.fontFamily.ComfortaaMedium,
    fontSize: Theme.size.small,
    color: Theme.colors.notGray,
  },
  price: {
    paddingTop: 4,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.normal,
    color: Theme.colors.bronze,
  },
  roundedButton: {
    height: 30,
    width: 30,
  },
});
