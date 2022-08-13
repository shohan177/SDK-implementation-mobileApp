import React from 'react'
import { View, Text } from 'react-native'

function Heading({heading}) {
    return (
        <View style={{ alignItems: 'center' }} >
            <Text style={{ textAlign: 'center', color: '#FFAD00', marginTop: 10, }}>{heading}</Text>
        </View>
    )
}

export default Heading