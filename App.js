import { NavigationContext } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import Navigation from './Navigation/Navigation';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  )
}

export default App
