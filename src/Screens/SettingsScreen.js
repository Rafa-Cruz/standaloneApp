import React from 'react'
import { Button, Text, SafeAreaView } from 'react-native'

export const SettingsScreen = (props) => {
    const {navigation} = props;

    const goToPage = () => {
        navigation.navigate('Home');
    }
    return (
      <SafeAreaView>
        <Text> SettingsScreen </Text>
        <Button title="Go to Home" onPress={goToPage} />
        
      </SafeAreaView>
    )
}

export default SettingsScreen
