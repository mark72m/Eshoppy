import { StyleSheet, Text, SafeAreaView, View, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E9E9E9', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png"
          }} />

      </View>

      <KeyboardAvoidingView>

        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, color: "#041E42" }}>
            Log In to Your Account
          </Text>
        </View>

        {/* Email Input */}
        <View style={{ marginTop: 50 }}>
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

        <Pressable style={{
          width: 200, height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#FEBE10",
          borderRadius: 6, marginLeft: "auto", marginRight: "auto"
        }}>
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16 }}>LogIn</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
          <Text style={{textAlign: "center", color:"gray", fontSize: 16}}>
            Don't Have an Account ? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})