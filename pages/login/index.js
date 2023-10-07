import {
  AppLogo,
  IconFacebook
} from '../../assets'
import {
  PrimaryButton
} from '../../components'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

function LoginScreen({ navigation }) {

  const onhandleLoginButton = () => {
    navigation.navigate('Home')
  }

  const submitRegister = () => {
    // call api
    // tampilkan pesan
    alert('Data berhasil disimpan')
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Image source={AppLogo} style={style.logoTop} />

          <TextInput
            style={[style.input, { marginTop: 20 }]}
            placeholder="Nomor Telpon,Alamat email atau nama pengguna"
          />

          <TextInput
            style={[style.input, { marginTop: 10 }]}
            placeholder="Kata sandi"
          />
          <PrimaryButton
            style={style.loginFacebook}
            title="Masuk"
            onPress={() => navigation.push('Main')}
          />
          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <Text style={[style.bodyText, { marginTop: 20 }]}>
              Tidak Punya Akun?  <Text style={{ color: '#1156BD' }}>
                Buat Akun
              </Text>
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 35
  },
  logoTop: {
    alignSelf: 'center',
    marginTop: 150
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6E6E6E'
  },
  loginFacebook: {
    marginTop: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  }
})

export default LoginScreen;
