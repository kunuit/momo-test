import Background from '@src/components/Background';
import Logo from '@src/components/Logo';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import TextInputCus from '@components/TextInputCus';
import Button from '@src/components/Button';
import {Router} from '@src/navigation/router';
import {Theme} from '@src/common/theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  nameValidator,
  emailValidator,
  passwordValidator,
  phoneValidator,
} from '../../modules/auth.validation';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  let ref_input1 = useRef();
  let ref_input3 = useRef();
  let ref_input4 = useRef();
  let ref_input5 = useRef();
  let ref_input6 = useRef();
  const navigation = useNavigation();
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });
  const [phone, setPhone] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = passwordValidator(confirmPassword.value);
    const phoneError = phoneValidator(phone.value);
    if (emailError || passwordError || nameError || phoneError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      setConfirmPassword({...confirmPassword, error: confirmPasswordError});
      setPhone({...phone, error: phoneError});
      return;
    }
    if (password.value !== confirmPassword.value) {
      setConfirmPassword({...confirmPassword, error: 'Not same password'});
      return;
    }

    navigation.goBack();
  };

  return (
    <Background>
      <Logo />

      <Text
        style={{
          textAlign: 'center',
          fontFamily: Theme.fontFamily.QuicksandSemiBold,
          fontSize: Theme.size.large,
          paddingBottom: 20,
        }}>
        Create account
      </Text>

      {/* {errorRegister && <Text style={styles.error}>{errorRegister}</Text>} */}

      <TextInputCus
        label="Username"
        returnKeyType="next"
        inputRef={ref => (ref_input1.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input3.current.focus()}
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        errorText={name.error}
      />

      <TextInputCus
        label="Email"
        returnKeyType="next"
        inputRef={ref => (ref_input3.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input4.current.focus()}
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        errorText={email.error}
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInputCus
        label="Password"
        returnKeyType="next"
        inputRef={ref => (ref_input4.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input5.current.focus()}
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        isPwd
      />

      <TextInputCus
        label="Confirm Password"
        returnKeyType="next"
        inputRef={ref => (ref_input5.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input6.current.focus()}
        value={confirmPassword.value}
        onChangeText={text => setConfirmPassword({value: text, error: ''})}
        errorText={confirmPassword.error}
        isPwd
      />

      <TextInputCus
        label="Phone"
        returnKeyType="next"
        inputRef={ref => (ref_input6.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={_onSignUpPressed}
        value={phone.value}
        onChangeText={text => {
          setPhone({value: text, error: ''});
        }}
        keyboardType="phone-pad"
        errorText={phone.error}
      />

      <Button
        style={{backgroundColor: Theme.colors.primary}}
        onPress={_onSignUpPressed}
        disabled={false}>
        {false ? (
          <ActivityIndicator
            style={{opacity: 1}}
            animating={true}
            size="small"
            color="#fff"
          />
        ) : (
          <Text style={styles.text}>Register</Text>
        )}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(Router.Login)}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Theme.colors.secondary,
    fontFamily: Theme.fontFamily.GilroyLight,
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    color: Theme.backgrounds.white,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    paddingBottom: 30,
  },
  link: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    color: Theme.colors.primary,
  },
  error: {
    width: '70%',
    color: Theme.colors.error,
    fontFamily: Theme.fontFamily.QuicksandMedium,
    fontSize: Theme.size.small,
    textAlign: 'center',
  },
});

export default RegisterScreen;
