import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Form validation 
import * as Yup from 'yup'
const PasswordSchema = Yup.object().shape({
passwordLength : Yup.number()
.min(4,'should be 4 char min ')
.max(16,'should be 16 char max')
.required('length is required')   // it define that length is required 
})
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})