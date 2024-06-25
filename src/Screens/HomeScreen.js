import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'

export const HomeScreen = (props) => {

    const {navigation} = props;

    const goToPage = () => {
        navigation.navigate('Settings');
    }

    return (
      <SafeAreaView>
        <Text> HomeScreen </Text>
        <Button title="Go to Settings" onPress={goToPage} />
      </SafeAreaView>
    )
}

export default HomeScreen
