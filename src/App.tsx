import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Pressable} from 'react-native'
import React, { JSX, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

//import constants
import {currencyByRupee} from '../src/constant'
//import component
import CurrencyButton from './components/CurrencyButton';

//imprting the snackBar
import Snackbar from 'react-native-snackbar'; 
// import { FlatList } from 'react-native/types_generated/index';
// import { StatusBar } from 'react-native/types_generated/index';
//popup kinda thing




export default function App(): JSX.Element {

  //Setting use states
  const [inputValue, setInputValue] = useState('');
  const [resultValue , setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000"
      })
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)) {
      const convertedValue = inputAmount *targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else{
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000"
      })
    }

  }

  return (
    // Just for my experinece and it works ❤️
    // <SafeAreaView>
    // <View style={
    //   {
    //     flexDirection: 'row',
    //   }
    // }>
    //   {currencyByRupee.map(item => {
    //    return (
    //     <View key={item.name}>
    //       <CurrencyButton name={item.name} flag={item.flag}></CurrencyButton>
    //     </View>
    //    )
    //   })}
    // </View>
    // </SafeAreaView>

    <>
      <StatusBar backgroundColor={'#ffff'}/>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹  </Text>
            <TextInput 
            style={styles.inputBox}
            maxLength={14}
            value={inputValue}
            clearButtonMode='always' //only for ios
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter a ammount here'
            placeholderTextColor="#000000ff"
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}></View>
          <FlatList
            style = {styles.flatList} 
            numColumns={3}
            data ={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
              onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item}/>

              </Pressable>
            )}
          />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal : 8,
    backgroundColor: '#e09fe3ff',
    flex: 1
  },
  topContainer:{
    marginTop : 100,
    marginBottom : 30,
    justifyContent : 'center',
    alignItems: 'center'
  },
  rupeesContainer:{
    flexDirection : 'row',
    marginBottom: 25,
    alignItems: 'center'
  },
  rupee:{
    fontWeight : 'bold',
    fontSize : 30
  },
  resultTxt:{
    fontSize : 25
  },
  inputBox:{
    fontSize : 25,
    color : 'black'
  },
  flatList:{
    marginTop : 50
  },
  bottomContainer:{

  },
  button:{
    // borderWidth : 1,
    width: 120,
    margin : 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius : 10,
    height: 70,
    backgroundColor: '#272525ff',
    elevation: 4
  },
  selected:{
    backgroundColor: '#cfd433ff',
    // color: 'black'
  }
})