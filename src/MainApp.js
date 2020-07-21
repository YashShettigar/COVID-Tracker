import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'

//pages
import CovidMap from './screens/CovidMap';
import CovidNews from './screens/CovidNews';

export default () => {
    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Covid Map">
                <Drawer.Screen name="Covid Map" component={CovidMap} />
                <Drawer.Screen name="Covid News" component={CovidNews} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
