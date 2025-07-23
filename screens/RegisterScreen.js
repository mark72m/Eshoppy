import { StyleSheet, Text, SafeAreaView, View, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  //const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Send a post request to backend API
    axios.post("http://localhost:8000/register", user).then((response) => {
      console.log(response);
      Alert.alert("Registration Successful", "You have Registered Successfully");
      setName("");
      setPassword("");
      setEmail("");
    }).catch((error) => {
      Alert.alert("Registration Error", "An error occured during registration");
      console.log("")
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image
          style={{ width: 150, height: 70 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png"
          }} />

      </View>

      <KeyboardAvoidingView>

        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10, color: "#041E42" }}>
            Create Your Account
          </Text>
        </View>

        {/* Name Input */}
        <View style={{ marginTop: 20 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center', gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5, borderRadius: 5,
            marginTop: 10
          }}>
            <MaterialIcons style={{ marginLeft: 8 }} name="person" size={24} color="gray" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              secureTextEntry={false}
              style={{
                color: "black", marginVertical: 10,
                width: 300, fontSize: name ? 16 : 16
              }}
              placeholder='Enter Your Name' />
          </View>
        </View>

        {/* Email Input */}
        <View style={{ marginTop: 10 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center', gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5, borderRadius: 5,
            marginTop: 30
          }}>
            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "black", marginVertical: 10,
                width: 300, fontSize: email ? 16 : 16
              }}
              placeholder='Enter Your Email' />
          </View>
        </View>

        {/* Phone Input
        <View style={{ marginTop: 10 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center', gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5, borderRadius: 5,
            marginTop: 30
          }}>
            <MaterialIcons style={{ marginLeft: 8 }} name="local-phone" size={24} color="gray" />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={{
                color: "black", marginVertical: 10,
                width: 300, fontSize: phone ? 16 : 16
              }}
              placeholder='Enter Phone Number' />
          </View>
        </View> */}

        {/* Password Input */}
        <View style={{ marginTop: 10 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center', gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5, borderRadius: 5,
            marginTop: 30
          }}>
            <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="gray" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "black", marginVertical: 10,
                width: 300, fontSize: password ? 16 : 16
              }}
              placeholder='Enter Your Password' />
          </View>
        </View>

        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>Keep me Logged In</Text>
          <Text style={{ color: "#007FFF" }}>Forgot Password ?</Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200, height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#FEBE10",
            borderRadius: 6, marginLeft: "auto", marginRight: "auto"
          }}>
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16 }}>
            Sign Up</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already Have an Account ? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})