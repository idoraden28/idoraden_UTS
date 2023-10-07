import { View, Text } from 'react-native';
import {
  PrimaryButton
} from '../../components'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mohon maaf silahkan beralih ke menu profil</Text>

    </View>
  );
}

export default HomeScreen;