import React from 'react'
import { Button, Text, View } from 'react-native'

export const SettingsScreen = (props) => {
    const {navigation} = props;

    const goToPage = () => {
        navigation.navigate('Home');
    }
    return (
      <View>
        <Text> SettingsScreen </Text>
        <Button title="Go to Home" onPress={goToPage} />
        
      </View>
    )
}

export default SettingsScreen
