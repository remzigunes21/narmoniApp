import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  ScrollView,
} from 'react-native';

import {statusCodes} from '@react-native-community/google-signin';

import Navigation from '../../../Services/Navigation';
import {Colors, Images, Screen, Fonts} from '../../../Theme';
import {Button, Input, Container, NrmText} from '../../../Components';
import styles from './styles';
import {compose} from 'recompose';
import {inject, observer} from 'mobx-react';

import {popup} from '../../../Common';

class Login extends Component {
  state = {
    isLoadingFacebook: false,
    isLoadingGoogle: false,
    isLoadingEmail: false,
    email: '',
    password: '',
    showLoginForm: false,
  };

  changeFormState = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      showLoginForm: !this.state.showLoginForm,
      email: '',
      password: '',
    });
  };

  checkIfExtraUserInfoExists = async () => {
    try {
      Navigation.reset(this.props.navigation, 'Main');
    } catch (error) {
      popup.error(
        'Hata',
        "Facebook'taki e-posta adresin ile daha önce narmoni'ye giriş yaptın. Mail adresin ile giriş yapmayı deneyebilirsin.",
        null,
        2500,
      );
      this.setState({isLoadingFacebook: false, isLoadingEmail: false});
    }
  };

  isEmailPasswordValid = () => {
    const {email, password} = this.state;
    let _email = email.trim();
    let _password = password.trim();
    if (!_email || !_password) {
      return popup.error('Hata', 'Gerekli alanlar boş bırakılamaz');
    }
    if (_password.length < 6) {
      return popup.error('Hata', 'Şifre minimum 6 karakterden oluşmalıdır');
    }

    return true;
  };

  signInWithEmail = async () => {
    if (!this.isEmailPasswordValid()) return;

    try {
      this.setState({isLoadingEmail: true});
      const {email, password} = this.state;
      await this.props.store.authStore.signInWithEmailAndPassword(
        email,
        password,
      );
      this.props.navigation.navigate('Main');
      //this.checkIfExtraUserInfoExists()
    } catch (error) {
      popup.error(
        'Hata',
        'Giriş yapılamadı, girdiğiniz bilgileri kontrol edin',
      );
      this.setState({isLoadingEmail: false});
    }
  };

  signUpWithEmail = async () => {
    if (!this.isEmailPasswordValid()) return;

    try {
      this.setState({isLoadingEmail: true});
      const {email, password} = this.state;
      await this.props.store.authStore.createUserWithEmailAndPassword(
        email,
        password,
      );
      this.props.navigation.navigate('Main');

      // this.checkIfExtraUserInfoExists()
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        popup.error('Hata', 'Bu e-postaya ait narmoni hesabı bulunmaktadır.');
      } else {
        popup.error(
          'Hata',
          'Hesap oluşturulamadı, girdiğiniz bilgileri kontrol edin',
        );
      }
      this.setState({isLoadingEmail: false});
    }
  };

  forgotPassword = async () => {
    this.props.navigation.navigate('ForgotPassword');
  };
  signInWithGoogle = async () => {
    this.setState({isLoadingGoogle: true});
    try {
      await this.props.store.authStore.signInWithGoogle();
    } catch (error) {
      console.log('error', error);
      console.log('CODE', error.code);
      this.setState({isLoadingGoogle: false});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else if (error.code == 'auth/email-already-in-use') {
        popup.error('Hata', 'Bu e-postaya ait narmoni hesabı bulunmaktadır.');
      } else if (
        error.code === 'auth/account-exısts-wıth-dıfferent-credentıal' ||
        error.code === 'auth/account-exists-with-different-credential'
      ) {
        popup.error(
          'Hata',
          "Google'daki e-postanıza ait narmoni hesabı bulunmaktadır. E-posta ile giriş yapmayı deneyin",
          undefined,
          2500,
        );
      }
    }
  };

  signInWithFacebook = async () => {
    try {
      this.setState({isLoadingFacebook: true});
      const credentials = await this.props.store.authStore.signInWithFacebook();
      this.props.navigation.navigate('Main');
      // this.checkIfExtraUserInfoExists()
    } catch (error) {
      console.log('error', error);
      if (
        error.code === 'auth/account-exısts-wıth-dıfferent-credentıal' ||
        error.code === 'auth/account-exists-with-different-credential'
      ) {
        popup.error(
          'Hata',
          "Facebook'taki e-postanıza ait narmoni hesabı bulunmaktadır. E-posta ile giriş yapmayı deneyin",
          undefined,
          2500,
        );
      } else {
        popup.error('Hata', 'Beklenmedik bir hata oluştu', undefined, 2500);
      }
      this.setState({isLoadingFacebook: false});
    }
  };

  render() {
    const {showLoginForm, email, password} = this.state;
    return (
      <Container
        androidPadStatusBar
        style={{backgroundColor: Colors.GREY_LIGHTEST}}>
        <ScrollView
          contentContainerStyle={{paddingTop: 20}}
          keyboardDismissMode="on-drag">
          <View style={styles.titleContainer}>
            <Image source={Images.appIcon} style={styles.icon} />

            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <NrmText.T1 style={{fontSize: 40}} type={Fonts.family.semiBold}>
                narmoni
              </NrmText.T1>
              <NrmText.T4 style={{opacity: 0.7}} type={Fonts.family.semiBold}>
                akıllı alışveriş asistanı
              </NrmText.T4>
            </View>
          </View>

          <View style={styles.formContainer}>
            <Input.Text
              autoCapitalize="none"
              label="E-POSTA"
              onChangeText={email => this.setState({email})}
              value={email}
            />
            <Input.Password
              label="ŞİFRE"
              onChangeText={password => this.setState({password})}
              value={password}
              secureTextEntry
              onSubmitEditing={
                showLoginForm ? this.signInWithEmail : this.signUpWithEmail
              }
            />
            <View
              style={{
                width: Screen.width * 0.9,
                marginLeft: -20,
                alignItems: 'flex-start',
              }}>
              {showLoginForm && (
                <TouchableOpacity
                  style={{paddingHorizontal: 15, paddingVertical: 5}}
                  onPress={this.forgotPassword}>
                  <NrmText.T4D type={Fonts.family.semiBold}>
                    Şifremi Unuttum
                  </NrmText.T4D>
                </TouchableOpacity>
              )}
            </View>

            <Button
              loading={this.state.isLoadingEmail}
              title={showLoginForm ? 'Giriş Yap' : 'Üye Ol'}
              long
              onPress={
                showLoginForm ? this.signInWithEmail : this.signUpWithEmail
              }
            />

            <TouchableOpacity
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                alignSelf: 'center',
              }}
              onPress={this.changeFormState}>
              {showLoginForm ? (
                <NrmText.T2D type={Fonts.family.semiBold}>
                  Üye değil misin? <NrmText.T2>ÜYE OL</NrmText.T2>
                </NrmText.T2D>
              ) : (
                <NrmText.T2D type={Fonts.family.semiBold}>
                  Üye misin? <NrmText.T2>GİRİŞ YAP</NrmText.T2>
                </NrmText.T2D>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.otherLoginsContainer}>
            <View style={styles.seperatorContainer}>
              <View style={styles.horizontalLine} />
              <NrmText.T2>YA DA</NrmText.T2>
              <View style={styles.horizontalLine} />
            </View>
            <View
              style={{
                width: Screen.width,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  width: Screen.width,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{width: Screen.width * 0.9}}>
                  <Button
                    loading={this.state.isLoadingFacebook}
                    title="Facebook"
                    onPress={this.signInWithFacebook}
                    titleColor={Colors.WHITE}
                    backgroundColor={Colors.FACEBOOK}
                    icon="facebook"
                    iconType="FontAwesome"
                  />
                </View>
              </View>
              <View
                style={{
                  width: Screen.width,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default compose(
  inject('store'),
  observer,
)(Login);
