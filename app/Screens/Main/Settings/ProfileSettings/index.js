import React, {PureComponent} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  NrmContainer,
  NrmIcon,
  NrmText,
  NrmButton,
} from '../../../../Components';
import {Colors, Images, Fonts} from '../../../../Theme';
import NrmTextInput from '../../../../Components/NrmInput';

export class ProfileSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',

      email: '',
      telNo: '',
    };
  }
  render() {
    return (
      <>
        <NrmContainer style={{backgroundColor: Colors.WHITE}}>
          <View style={styles.profileImage}>
            <NrmButton
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.props.navigation.pop()}>
              <NrmIcon
                name="plus"
                size={32}
                type="Entypo"
                color={Colors.GREY_COLOR_LIGHT}
              />
              <View
                style={{
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 30,
                }}>
                <Text style={{fontSize: 12}}>Profil Fotoğrafı Ekle</Text>
              </View>
            </NrmButton>
          </View>
        </NrmContainer>

        <SafeAreaView style={{flex: 3, backgroundColor: Colors.WHITE}}>
          <ScrollView>
            <View style={{marginHorizontal: 10}}>
              <View>
                <NrmText.T1G style={{fontSize: 16}}>
                  Profil Bilgilerin
                </NrmText.T1G>
              </View>

              <View>
                <NrmText.T1G style={{fontSize: 12}}>
                  Bu bilgiler narmoni’ye bağladığın hesaplarda ya da narmoni
                  üzerinden hızlı e-ticaret üyeliklerinde kullanılacak.
                </NrmText.T1G>
              </View>
            </View>
            {this.renderInputContainer()}
            <View style={{marginHorizontal: 10}}>
              <View>
                <NrmText.T1G style={{fontSize: 16}}>
                  Diğer Bilgilerin
                </NrmText.T1G>
              </View>

              <View>
                <NrmText.T1G style={{fontSize: 12}}>
                  Bu bilgiler sana daha uyumlu fırsatlar bulmamızda yardımcı
                  olabilir.
                </NrmText.T1G>
              </View>
            </View>
            {this.renderOther()}

            <View style={styles.inputcontainer}>
              <NrmButton style={styles.loginBtn}>
                <NrmText.T1G style={styles.loginText}>Güncelle</NrmText.T1G>
              </NrmButton>
            </View>

            {this.renderAccount()}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

  renderInputContainer = () => {
    return (
      <View style={styles.inputcontainer}>
        <View style={styles.inputView}>
          <NrmTextInput
            placeholder="Adın*"
            onChangeText={text => this.setState({name: text})}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputView}>
          <NrmTextInput
            placeholder="Soyadın*"
            onChangeText={text => this.setState({name: text})}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputView}>
          <NrmTextInput
            placeholder="E-Mail*"
            onChangeText={text => this.setState({name: text})}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputView}>
          <NrmTextInput
            placeholder="Telefon No*"
            onChangeText={text => this.setState({name: text})}
            style={styles.inputText}
          />
        </View>
      </View>
    );
  };

  renderAccount = () => {
    return (
      <View style={styles.inputcontainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={Images.marketPicture}
            style={{width: 50, height: 50}}
            resizeMode="contain"
            style={{marginVertical: 12}}
          />
          <NrmButton style={styles.accountButton}>
            <NrmText.T1G style={styles.accountText}>Hemen Bağla</NrmText.T1G>
          </NrmButton>
        </View>
      </View>
    );
  };

  renderOther = () => {
    return (
      <>
        <View style={styles.inputcontainer}>
          <View style={{}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 4,
              }}>
              <NrmText.T1G style={{fontSize: 16}}>Cinsiyet</NrmText.T1G>
            </View>
            <View style={styles.inputView}>
              <NrmTextInput
                placeholder="Belirtmek İstemiyorum*"
                onChangeText={text => this.setState({name: text})}
                style={styles.inputText}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <NrmTextInput
              placeholder="Doğum Tarihi*"
              onChangeText={text => this.setState({name: text})}
              style={styles.inputText}
            />
          </View>
        </View>
      </>
    );
  };
}

export default ProfileSettings;

const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 40,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 40,
    backgroundColor: Colors.WHITE_LIGHT,
  },

  inputcontainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },

  inputView: {
    width: '80%',
    backgroundColor: Colors.WHITE_LIGHT,
    borderRadius: 15,
    height: 40,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  inputText: {
    height: 50,
    color: Colors.BLACK,
    fontSize: 16,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.ORANGE_LIGHT,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  accountButton: {
    width: '50%',
    borderColor: Colors.ORANGE_LIGHT,
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  loginText: {
    color: Colors.WHITE,
    fontSize: 22,
    fontFamily: Fonts.family.bold,
  },
  accountText: {
    color: Colors.ORANGE_LIGHT,
    fontSize: 18,
    fontFamily: Fonts.family.bold,
  },
});
