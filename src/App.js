/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Theme} from '@common/theme';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import {store, persistor} from './state/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation/index';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const App = () => {
  // const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, backgroundColor: Theme.backgrounds.white}}>
      <StatusBar
        animated={true}
        backgroundColor={Theme.backgrounds.white}
        // translucent={true}
        barStyle="dark-content"
        showHideTransition="fade"
        // hidden={true}
      />
      <AppNavigation />

      {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});
