import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Platform } from 'react-native';
import { Exercise } from "../screem/Exercise";
import { History } from "../screem/History";
import { Profile } from "../screem/Profile";
import { Home } from "../screem/Home";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export function AppRoutes(){

    return(
      <view style={styles.view}>
        <NavigationContainer>
      <Tab.Navigator  initialRouteName="History"  screenOptions={{tabBarLabelStyle:{fontSize: 15, fontWeight: 'bold'} , tabBarStyle: {backgroundColor: 'gray',},tabBarActiveTintColor: 'springgreen', tabBarInactiveTintColor: 'black' ,headerShown:false, tabBarActiveBackgroundColor: 'lightseagreen'}}>
        <Tab.Screen  name="Home" component={Home} options={{tabBarIcon: ({color,}) => <IconMaterialIcons color={color} size={30} name="home"/>}}/>
        <Tab.Screen name="History" component={History} options={{tabBarIcon: ({color,}) => <IconMaterialIcons color={color} size={30} name="history"/>}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({color,}) => <IconAntDesign color={color} size={30} name="profile" />}}/>
        <Tab.Screen name="Exercise" component={Exercise} options={{tabBarButton:() => null,tabBarIcon: () => <IconMaterialIcons name="model-training"/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </view>
    )
}

const styles = StyleSheet.create({
  view:{
      flex:1,
      backgroundColor:'black',
  },

  
})