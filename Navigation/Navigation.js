import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../src/Screens/SplashScreen/SplashScreen';
import LocationScreen from '../src/Screens/LocationScreen/LocationScreen';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen';
import SearchScreen from '../src/Screens/SearchScreen/SearchScreen';
import CartScreen from '../src/Screens/CartScreen/CartScreen';
import DailyDealsScreen from '../src/Screens/DailyDealsScreen/DailyDealsScreen';
import FoodDeliveryScreen from '../src/Screens/FoodDeliveryScreen/FoodDeliveryScreen';
import ModalScreen from '../src/Screens/CredentialsModalScreen/ModalScreen';
import ApplyVoucher from '../src/Screens/ApplyVoucher/ApplyVoucher';
import CheckoutScreen from '../src/Screens/CheckoutScreen/CheckoutScreen';
import PaymentMethodScreen from '../src/Screens/PaymentMethodScreen/PaymentMethodScreen';



const Drawer = createDrawerNavigator();
function DrawerRouts() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" drawerType='front'>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="ModalScreen" component={ModalScreen} />
        </Drawer.Navigator>
    );
}
const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={DrawerRouts} options={{ headerShown: false }} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DailyDealsScreen" component={DailyDealsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FoodDeliveryScreen" component={FoodDeliveryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ApplyVoucher" component={ApplyVoucher} options={{ headerShown: false }} />
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;