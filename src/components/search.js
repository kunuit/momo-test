import {Theme} from '@src/common/theme';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({
  placeholder = 'search',
  onFocus,
  onCamera,
  showIcon,
  autoFocus,
  styleSearch,
  styleInput,
  showKeyBoard = true,
  tiny,
}) => {
  const [text, setText] = useState('');
  return (
    <View style={[styles.root, styleSearch]}>
      <TextInput
        style={[styles.input, styleInput]}
        onChangeText={e => {
          setText(e);
        }}
        placeholder={placeholder}
        value={text}
        placeholderTextColor={Theme.colors.lineBorder}
        onFocus={onFocus}
        autoFocus={autoFocus}
        showSoftInputOnFocus={showKeyBoard}
        // isFocused={isFocused => setShowIcon(isFocused)}
      />
      {showIcon && (
        <TouchableOpacity
          onPress={onCamera}
          style={{position: 'absolute', right: 20, opacity: 0.7}}>
          <Icon name="camera" color={Theme.colors.primary} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: 'red',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  input: {
    // height: 35,
    borderWidth: 0.5,
    borderColor: Theme.colors.primary,
    borderRadius: 25,
    paddingLeft: 15,
    paddingBottom: 2,
    paddingTop: 2,
    paddingRight: 38,
    color: Theme.colors.notGray,
  },
});
