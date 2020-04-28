import React,  { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, AsyncStorage} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({ route, navigation }) {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    const user_data = {
      user: user,
      pass: pass
    }
    try{
      await AsyncStorage.setItem("user", JSON.stringify(user_data));
      let user_stored = await AsyncStorage.getItem("user");
      user_stored = JSON.parse(user_stored);
      console.log(user_stored);
      navigation.navigate("Main");
    }
    catch(e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header_container}>
        <Text style={styles.header_text}>
          Hola, {(user == '') ? "Mundo" : user}
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.login_container} behavior={"padding"} enabled>
        <CustomInput
          icon={"user"}
          placeholder={"Usuario..."}
          secure={false}
          action={setUser} />
        <CustomInput 
          icon={"lock"} 
          placeholder={"Contraseña..."} 
          secure={true} 
          action={setPass}/>
        <CustomButton action={login}/>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header_text: {
    fontSize: 90,
    fontWeight: 'bold',
    color: 'white'
  },
  login_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40
  }
});