import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CurrencyButton from './components/CurrencyButton'

export default function App() {
  return (
    <SafeAreaView>
    <View>
      <CurrencyButton name='bhart' flag='india'></CurrencyButton>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})