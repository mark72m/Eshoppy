import { StyleSheet, Text, SafeAreaView, View, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png"
          }} />

      </View>

      <KeyboardAvoidingView>
        <View>
          <Text>Log In to Your Account</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({})