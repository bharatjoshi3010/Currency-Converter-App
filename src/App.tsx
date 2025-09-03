import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CurrencyButton from './components/CurrencyButton';
import {currencyByRupee} from '../src/constant'

export default function App() {
  return (
    <SafeAreaView>
    <View style={
      {
        flexDirection: 'row',
      }
    }>
      {currencyByRupee.map(item => {
       return (
        <View>
          <CurrencyButton name={item.name} flag={item.flag}></CurrencyButton>
        </View>
       )
      })}
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})