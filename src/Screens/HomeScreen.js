import React from 'react'
import { Text, View, Button } from 'react-native'

export const HomeScreen = (props) => {

    const {navigation} = props;

    const goToPage = () => {
        navigation.navigate('Settings');
    }

    return (
      <View>
        <Text> HomeScreen </Text>
        <Button title="Go to Settings" onPress={goToPage} />
      </View>
    )
}

export default HomeScreen
