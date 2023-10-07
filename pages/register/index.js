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
  ScrollView
} from 'react-native';

function RegisterScreen({ navigation }) {

  const onhandleLoginButton = () => {
    navigation.navigate('Login')
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
          <Text style={style.bodyText}>Daftar untuk melihat foto dan video dari teman Anda.</Text>
          <PrimaryButton
            icon={IconFacebook}
            style={style.loginFacebook}
            title="Masuk dengan Facebook"
          />

          <Text style={[style.bodyText, { marginTop: 20 }]}>atau</Text>

          <TextInput
            style={[style.input, { marginTop: 20 }]}
            placeholder="Nomor telpon / alamat email"
          />

          <TextInput
            style={[style.input, { marginTop: 10 }]}
            placeholder="Nama lengkap"
          />

          <TextInput
            style={[style.input, { marginTop: 10 }]}
            placeholder="Nama pengguna"
          />

          <TextInput
            style={[style.input, { marginTop: 10 }]}
            placeholder="Kata sandi"
          />

          <Text style={style.bodyText}>
            Orang yang menggunakan atau melayani mungkin telah mengunggah kontak Anda
            informasi ke Instagram.

            <Text style={{ color: '#1156BD' }}>
              Pelajari lebih lanjut
            </Text>
          </Text>

          <Text style={[style.bodyText, { marginTop: 20 }]}>
            Dengan mendaftar, Anda menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami
          </Text>

          <PrimaryButton
            style={style.loginFacebook}
            onPress={submitRegister}
            title="Daftar"
          />

          <PrimaryButton
            style={style.loginFacebook}
            title="Masuk"
            onPress={onhandleLoginButton}
          />
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
    marginTop: 20
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

export default RegisterScreen;
