import {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Mobile() {
  const [mobile, setMobile] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://swoopnow.com/wp-content/uploads/2020/07/User-Authentication_-Understanding-the-Basics-Top-Tips.jpg',
          }}
          style={styles.image}
        />
      </View>
      <Text> Enter your phone number</Text>

      <TextInput
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
        placeholder="Mobile Number"
      />

      <Button
        title="Press Me"
        color={'white'}
        onPress={() => Alert.alert('hello')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  h2: {},
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 400,
  },
  input: {},
});
