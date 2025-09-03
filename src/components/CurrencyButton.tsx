import React from 'react'
import type { JSX, PropsWithChildren } from 'react'

import { View, Text, StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonConatiner}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonConatiner:{
        alignItems: 'center'
    },
    flag:{
        fontSize: 28,
        color : '#da2020ff',
        marginBottom: 4
    },
    country:{
        fontSize: 14,
        color : '#d63131ff',
    }
})

export default CurrencyButton