import React, {Component} from 'react';
import {View} from 'react-native';
import {compose} from 'recompose';
import {observer, inject} from 'mobx-react';

import {Colors} from '../../../Theme';
import {Container, Button, NrmText, Input} from '../../../Components';
import {popup} from '../../../Common';

class ForgotPassword extends Component {
  state = {email: ''};

  resetPassword = async () => {
    try {
      if (!this.state.email) {
        return;
      }
      await this.props.store.authStore.sendPasswordResetEmail(this.state.email);
      popup.success(
        'Başarılı',
        'Şifre sıfırlama bağantısı e-posta adresinize gönderildi',
      );
      this.props.navigation.goBack();
    } catch (error) {
      popup.error('Hata', 'Girdiğiniz e-postaya ait bir kullanıcı bulunamadı');
    }
  };

  render() {
    return (
      <Container centered="all" style={{backgroundColor: Colors.GREY_LIGHTEST}}>
        <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
          <View style={{paddingHorizontal: 25, paddingBottom: 30}}>
            <NrmText.T1 bold style={{fontSize: 24}}>
              E-posta adresini girebilir misin?
            </NrmText.T1>

            <NrmText.T4 style={{opacity: 0.6}}>
              Şifreni sıfırlaman için sana bir e-posta göndereceğiz
            </NrmText.T4>
          </View>
          <View style={{alignItems: 'center'}}>
            <Input.Text
              label={'E-POSTA'}
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              keyboardType="email-address"
              onSubmitEditing={this.resetPassword}
            />
          </View>
        </View>
        <Button
          onPress={this.resetPassword}
          title="Şifremi Sıfırla"
          long
          wide
        />
      </Container>
    );
  }
}

export default compose(
  inject('store'),
  observer,
)(ForgotPassword);
