React-navigation/bottom-tabs
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icon/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import createMatrialBottomTabNavigator from BottomTabNavigator;

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ foucused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = foucused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name ==='CreatePost') {
                        iconName = foucused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CreatePost" component={CreatePost}/>
        </Tab.Navigator>
    );
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"black"
        },
        droidSafeArea:{
            marginTop: Platform.OS === "android" ? statusbar.currentHeigth : RFValue(35)
        },
        appTitle:{
            flex:0.07,
            flexDirection:"row"
        },
        appIcon:{
            flex:0.2,
            jutifyContent:"center",
            alignItems:"center"
        },
        iconImage:{
            width:"100%",
            height:"100%",
            resizeMode:"contain"
        },
        appTitleTextContainer:{
            flex:0.8,
            justifyContent:"center"
        },
        appTitleText:{
            color:"white",
            fontSize:RFValue(28)
        },
        cardContainer:{
            flex:0.85
        }
        
    });
}
export default BottomTabNavigator
